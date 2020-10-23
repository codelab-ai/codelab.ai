#!make

.PHONY: %

# NODE_OPTIONS=NODE_OPTIONS=--max-old-space-size=4096

#
# BUILD
#

build-dev:
	npx $(NODE_OPTIONS) nx run-many \
	--target=build \
	--all \
	--parallel \
	"$@"

build-ci:
	npx $(NODE_OPTIONS) run-many \
    --target=build \
    --all \
    --parallel \
    --maxWorkers=4

build-prod:
	npx $(NODE_OPTIONS) run-many \
    --target=build \
    --projects=web,api-gateway,api-services-props \
    --with-deps \
    --parallel \
    --skip-nx-cache \
    --maxWorkers=4

#
# Generate
#

generate-prisma:
	npx prisma generate --schema libs/api/prisma/schema.prisma

generate-graphql:
	npx graphql-codegen --config codegen.yml

generate-graphql-watch:
	npx graphql-codegen --config codegen.yml --watch "apps/api/src/assets/**/*.graphql"


#
# Docker
#

# local usage
docker-start:
	# yarn --frozen-lockfile; \
	# make build-prod; \
	# yarn --frozen-lockfile --prod;
	docker-compose \
	-f .docker/docker-compose.yml \
	up --build app

docker-build:
	docker-compose \
  --verbose \
  -f .docker/docker-compose.yml \
  build app

docker-push:
	docker-compose \
		-f .docker/docker-compose.yml \
		push app

docker-log:
	docker-compose \
		-f .docker/docker-compose.yml \
		up fluentd

#
# LINT
#

lint-commit-ci:
	echo "${CIRCLE_BASE_REVISION}"
	npx commitlint --from="${CIRCLE_BASE_REVISION}" "$@"

lint-commit-dev:
	npx $(NODE_OPTIONS) commitlint -E HUSKY_GIT_PARAMS

lint-eslint:
	npx $(NODE_OPTIONS) node scripts/lint/eslint.js

#
# TEST
#

test-dev:
	npx $(NODE_OPTIONS) nx run-many \
	--target=test \
	--all \
	--parallel \
	--silent \
	"$@"

test-ci:
	npx $(NODE_OPTIONS) nx run-many \
	--target=test \
	--all \
	--parallel \
	--maxWorkers=4 \
	--silent

#
# START
#

start-dev:
	npx $(NODE_OPTIONS) nx run-many \
		--maxParallel=6 \
		--target=serve \
		--projects=api-gateway,web \
		--with-deps \
		--parallel \
		"$@"

start-api:
	npx $(NODE_OPTIONS) nx serve api-gateway \
		--with-deps \
		--parallel \
		"$@"

start-dev-gateway:
	npx $(NODE_OPTIONS) nx run-many \
		--target=serve \
		--projects=api-gateway \
		--parallel \
		"$@"

#	@npx concurrently \
#	--names="start" \
#		'nx run-many \
#		--target=serve \
#		--projects=web,api-gateway,api-services-props,api-services-graph \
#		--parallel \
#		"$@"' \
#		'nodemon \
#			--ext graphql \
#			--watch "apps/api/gateway/src/assets/**/*.graphql" \
#			--verbose \
#			--exec "wait-on http://localhost:4000 && make generate-graphql"'
		# Need to wait for graphql server to finish reloading

start-prod:
	@pm2 startOrReload config/pm2.json

#
# Other
#
docs:
	typedoc --out libs/core/tree/docs libs/core/tree
