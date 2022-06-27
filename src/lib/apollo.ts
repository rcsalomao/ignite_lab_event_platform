import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4qh5rah3tca01xsf78h1fq5/master",
  cache: new InMemoryCache(),
});
