# Data Flow

[Back](../../README.md)

## User Input

User input is validated with form, then with GraphQL input types. At this point, we have validated types at a primitive level, but still require business validation rules.

io-ts domain dto type gives us confidence that business rules are met, undefined types could still sneak by though.

Our domain model types is what validates the nullable types. Since dto's could have undefined, we will combine dto with queried data for updates.

## Types

GraphQL input object should use io-ts for enums & types for declare variables, and use GraphQL types for the decorators

The decorators is responsive for the http layer, while the declare variables for code base type safety.

## Fetching

There are many ways to structure our application state. Here is a suggestion.

We load GraphQL data via SSR using the codegen components, `pages/graphql.tsx` has an example.

We use a `withApollo` hoc to accomplish this. We could also have a `withMachine` or `withActor` hoc, which we can populate data from graphql.
