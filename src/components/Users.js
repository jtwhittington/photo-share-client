import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const ALL_USERS_QUERY = gql`
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
        {result => 
            <p>Users are loading: {result.loading ? "yes" : "no"}</p>
        }
    </Query>

export default Users