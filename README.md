# vue-router-typed-query
A simple package to type your query parameters

## Installation
```shell
yarn add @henrotaymcorp/vue-router-typed-query
```

## Usage

### useQuery
```typescript
import { z } from "zod";
import { useQuery } from "@henrotaymcorp/vue-router-typed-query";

// Construct your validation schema.
const querySchema = z.object({
  name: z.string(),
});

// Await result
const query = await useQuery(querySchema); // { name: string } OR throws error if invalid
```

### useSafeQuery
```typescript
import { z } from "zod";
import { useQuery } from "@henrotaymcorp/vue-router-typed-query";

// Construct your validation schema.
const querySchema = z.object({
  name: z.string(),
});

// Await result
const safeQuery = await useSafeQuery(querySchema); // { data: { name: string }, success: true } | { error: ZodError, success: false } }
if (!safeQuery.success) return safeQuery.error; // ZodError
safeQuery.data; // { name: string }
```

## Caveats
`useQuery` and `useSafeQuery` can't be used after an await or a promise resolution. See this [issue](https://github.com/vuejs/router/issues/257) for details.
```typescript
const ThrowingError = async () => {
  await callApi();
  const query = useQuery(querySchema) // Fails !!
  // ...
}
```
```typescript
const Correct = async () => {
  const query = useQuery(querySchema) // OK !!
  await callApi();
  // ...
}
```

## Development
```shell
./cli bootstrap #bootstrap project
./cli yarn install #install dependencies
./cli start #start project
./cli stop #stop project
./cli restart  #restart project
```