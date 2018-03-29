import React from 'react'
import { gql } from 'apollo-boost'
import { Query, Mutation } from 'react-apollo'
import { UserList } from './ui'
import { ME_QUERY } from './AuthorizedUser'

export const ALL_USERS_QUERY = gql`
    query allUsers {
        totalUsers
        allUsers {
            id
            name
            avatar
        }
    }
`

const FAKE_LOGIN = gql`
    mutation fakeLogin($id: ID!) {
        fakeUserAuth(id:$id) {
            token
            user {
                id
            }
        }
    }
`

const ADD_FAKE_USERS_MUTATION = gql`
    mutation addFakeUsers($count:Int!) {
        addFakeUsers(count:$count) {
            id  
            name
            github_login
            avatar_url
        }
    }
`

const Users = () => 
    <Query query={ALL_USERS_QUERY}>
        {({data, loading }) => 
            <Mutation mutation={FAKE_LOGIN} 
                refetchQueries={[{ query: ME_QUERY }]}
                update={(cache, {data}) => {
                    window.localStorage.setItem('token', data.fakeUserAuth.token)
                    window.localStorage.setItem('uid', data.fakeUserAuth.user.id)
                }}>
                {mutation => 
                    <UserList users={data.allUsers} 
                        loading={loading} 
                        onDoubleClick={({id}) => {
                            mutation({ variables: { id }})
                        }} />
                }
            </Mutation>
        }
    </Query>   

export default Users