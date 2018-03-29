import { 
    InMemoryCache, 
    HttpLink, 
    ApolloLink,
    ApolloClient 
} from 'apollo-boost'

export default () => {

    const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })
    const authLink = new ApolloLink((operation, forward) => {
        const token = localStorage.getItem('token')
        if (token) {
            operation.setContext({
                headers: {
                    authorization: `bearer ${token}`
                }
            })
        }
        return forward(operation)
    })

    const link = authLink.concat(httpLink)

    const cache = new InMemoryCache({
        dataIdFromObject: object => object.id
    })

    return new ApolloClient({link, cache})

}