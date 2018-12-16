import { ApolloClient, InMemoryCache  } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'

const httpLink = new createHttpLink({ uri: 'https://graphql.anilist.co', useGETForQueries: false });
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default client;