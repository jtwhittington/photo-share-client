import { 
    InMemoryCache,
    ApolloLink,
    ApolloClient,
    split 
} from 'apollo-boost'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { persistCache } from 'apollo-cache-persist'
import { createUploadLink } from 'apollo-upload-client'

export default ({ persist=false }) => {

    const httpLink = createUploadLink({
        includeExtensions: true,
        uri: 'http://localhost:4000/graphql'
    })
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
        uri: `ws://localhost:4000/subscriptions`,
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

    if (persist) {
        persistCache({
            cache,
            storage: localStorage
        })
    
        if (localStorage['apollo-cache-persist']) {
            cache.restore(JSON.parse(localStorage['apollo-cache-persist']))
        }
    } else {
        localStorage.removeItem('apollo-cache-persist')
    }

    return new ApolloClient({link, cache})

}