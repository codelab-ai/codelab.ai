/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { get } from 'env-var'
import { CodelabAppModule } from './app/codelab-app.module'

const bootstrap = async () => {
  const app = await NestFactory.create(CodelabAppModule)
  const globalPrefix = ''

  app.setGlobalPrefix(globalPrefix)
  app.enableCors({ origin: '*' })

  // Allows us to use class-validator to validate graphql input
  app.useGlobalPipes(new ValidationPipe())

  const apiEndpoint = get('CODELAB_API_ENDPOINT').required().asUrlObject()
  const port = get('CODELAB_API_PORT').asString() ?? '3333'

  await app.listen(port, () => {
    Logger.log(`Listening at ${apiEndpoint.toJSON()}${globalPrefix}`)
  })
}

bootstrap()
