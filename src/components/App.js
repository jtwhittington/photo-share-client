import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Users, { ALL_USERS_QUERY } from './Users'
import { gql } from 'apollo-boost'
import { withApollo } from 'react-apollo'
import AuthorizedUser from './AuthorizedUser'
import PostPhoto from './PostPhoto'
import Photos, { LIST_PHOTOS } from './Photos'
import { UserInterface } from './ui'

const LISTEN_FOR_USERS = gql`
    subscription {
        newUser {
            id
            name
            avatar
        }
    }
`

const LISTEN_FOR_PHOTOS = gql`
    subscription {
        newPhoto {
            id
            name
            url
            created
            postedBy {
                name
                avatar
            }
        }
    }
`

const Menu = () => [
    <AuthorizedUser key="authorized-user" />,
    <Users key="users" />
]

class App extends Component {

    componentDidMount() {
        this.subscribeToUsers(this.props.client)
        this.subscribeToPhotos(this.props.client)
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

    subscribeToPhotos(client) {
        client.subscribe({
            query: LISTEN_FOR_PHOTOS
        }).subscribe(({data}) => {
            const { allPhotos } = client.readQuery({ query: LIST_PHOTOS })
            client.writeQuery({
                query: LIST_PHOTOS,
                data: {
                    allPhotos: [
                        data.newPhoto,
                        ...allPhotos
                    ]
                }
            })
        })
    }

    render() {
        return (
            <BrowserRouter>
                <UserInterface menu={<Menu />}>
                    <Switch>
                        <Route exact path="/" component={Photos} />
                        <Route path="/newPhoto" component={PostPhoto} />
                    </Switch>
                </UserInterface>
            </BrowserRouter>
        )
    }

}    

export default withApollo(App)