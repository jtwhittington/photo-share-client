import { InMemoryCache, HttpLink, ApolloClient } from 'apollo-boost'

export default () => {

    const link = new HttpLink({ uri: 'http://localhost:4000/graphql '})
    const cache = new InMemoryCache({
        dataIdFromObject: object => object.id
    })

    return new ApolloClient({link, cache})

}