import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'http://box5794.temp.domains/~fintecm4/graphql',
    cache: new InMemoryCache(),
  });

//NEXT_PUBLIC_WORDPRESS_API_URL
//  `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`
// process.env.NEXT_PUBLIC_WORDPRESS_API_URL