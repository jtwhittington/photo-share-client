import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Users, { ALL_USERS_QUERY } from './Users'
import { gql } from 'apollo-boost'
import { withApollo } from 'react-apollo'
import AuthorizedUser from './AuthorizedUser'

const LISTEN_FOR_USERS = gql`
    subscription {
        newUser {
            id
            name
            avatar
        }
    }
`

class App extends Component {

    componentDidMount() {
        this.subscribeToUsers(this.props.client)
    }

    subscribeToUsers(client) {
        client.subscribe({
            query: LISTEN_FOR_USERS
        }).subscribe(({data}) => {
            const { totalUsers, allUsers } = client.readQuery({ query: ALL_USERS_QUERY })
            client.writeQuery({
                query: ALL_USERS_QUERY,
                data: {
                    totalUsers: totalUsers + 1,
                    allUsers: [
                        ...allUsers,
                        data.newUser
                    ]
                }
            })
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <AuthorizedUser />
                    <Users />
                </div>
            </BrowserRouter>
        )
    }

}    

export default withApollo(App)