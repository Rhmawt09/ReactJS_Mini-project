import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://destined-crab-66.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "c8CXbHNmty8nsG1p1AVEL8Kys2gLsbRac7bTRwsJ9IA5BBpfjbxC7oM6P2ZW1zYU",
  },
  cache: new InMemoryCache(),
});

