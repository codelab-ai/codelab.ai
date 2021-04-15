import { getSession } from '@auth0/nextjs-auth0'
import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

// nextjs-auth0's best practice is to proxy external api requests
// using custom next api routes. https://github.com/auth0/nextjs-auth0/issues/67
// If we need to avoid this we can use https://github.com/auth0/auth0-react, which stores makes the key
// available in the client, but we lose the benefit of being able to get the auth key in SSR

const app = express()

app.use('*', async (baseReq, baseRes, next) => {
  const session = await getSession(baseReq, baseRes)

  return createProxyMiddleware({
    target: process.env.HASURA_URL_GRAPHQL,
    changeOrigin: true,
    proxyTimeout: 5000,
    secure: false,
    headers: {
      Connection: 'keep-alive',
    },
    pathRewrite: {
      '^/api/graphql': '',
    },
    onError: (err, req, res) => {
      console.log('err', err, res.statusCode)
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      })
      res.end(
        'Something went wrong. And we are reporting a custom error message.',
      )
    },
    onProxyReq: (proxyReq, req) => {
      if (session) {
        const xHasuraUserId =
          session.user['https://hasura.io/jwt/claims']['x-hasura-user-id']

        proxyReq.setHeader('X-Hasura-User-Id', xHasuraUserId)
        proxyReq.setHeader('Authorization', `Bearer ${session.idToken}`)
        // proxyReq.setHeader('x-hasura-admin-secret', process.env.HASURA_GRAPHQL_ADMIN_SECRET as string)
      }

      if (req.body) {
        const bodyData = JSON.stringify(req.body)
        // in case if content-type is application/x-www-form-urlencoded -> we need to change to application/json

        proxyReq.setHeader('Content-Type', 'application/json')
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData))

        // stream the content
        proxyReq.write(bodyData)
      }
    },
  })(baseReq, baseRes, next)
})

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

export default app
