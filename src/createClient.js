import { 
    InMemoryCache, 
    HttpLink, 
    ApolloLink,
    ApolloClient,
    split 
} from 'apollo-boost'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

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
    const wsLink = new WebSocketLink({
        uri: `ws://localhost:4000`,
        options: { reconnect: true }
    })
    
    const httpAuthLink = authLink.concat(httpLink)

    const link = split(
        ({ query }) => {
            const { kind, operation } = getMainDefinition(query)
            return kind === 'OperationDefinition' && operation === 'subscription'
        }, 
        wsLink,
        httpAuthLink
    )

    const cache = new InMemoryCache({
        dataIdFromObject: object => object.id
    })

    return new ApolloClient({link, cache})

}