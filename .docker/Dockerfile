#
# We don't use .dockerignore due to performance issues.
#
# We build `dist` with CI first before building our image, installing production NPM here is require due to some packages that require native bindings.
#

#
# (1) Build
#
FROM node:14.15.0-alpine AS build

RUN apk add bash make nasm autoconf automake libtool dpkg pkgconfig libpng libpng-dev g++

WORKDIR /usr/local/codelab

COPY package.json package.json

RUN yarn --prod --frozen-lockfile

#
# (2) Prod
#
FROM node:14.15.0-alpine AS prod

RUN apk add curl

WORKDIR /usr/local/codelab

COPY package.json package.json
COPY dist dist
COPY dgraph dgraph
COPY scripts scripts
COPY --from=build /usr/local/codelab/node_modules ./node_modules

RUN ls
RUN ls -al node_modules | head -10

CMD ["node", "dist/apps/api/main.js"]

# At runtime need to specify `EXPOSE`, `ENTRYPOINT`
