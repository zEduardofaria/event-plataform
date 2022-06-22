import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4pl4czs1yes01z472xyc24a/master",
  cache: new InMemoryCache()
})