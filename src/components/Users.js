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

const Users = () => 
    <Query query={ALL_USERS_QUERY}>
        {({data, loading }) => 
            <UserList users={data.allUsers} loading={loading} />
        }
    </Query>   

export default Users