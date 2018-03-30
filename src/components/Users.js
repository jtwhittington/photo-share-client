import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { UserList } from './ui'

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

const ADD_FAKE_USERS_MUTATION = gql`
    mutation addFakeUsers($count:Int!) {
        addFakeUsers(count:$count) {
            id  
            name
            githubLogin
            avatar
        }
    }
`

const updateLocalCache = (cache, { data }) => {
    const { totalUsers, allUsers } = cache.readQuery({query: ALL_USERS_QUERY})
    cache.writeQuery({
        query: ALL_USERS_QUERY, 
        data: {
            totalUsers: totalUsers + data.addFakeUsers.length,
            allUsers: [
                ...allUsers,
                ...data.addFakeUsers
            ]
        }
    })
}

const Users = () => 
    <Query query={ALL_USERS_QUERY}>
        {({data, loading }) => 
            <UserList users={data.allUsers} loading={loading} />
        }
    </Query>   

export default Users