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
        {({data, loading, refetch }) => loading ?
            <p>loading users...</p> :
            <div>
                <p>{data.totalUsers} Users</p>
                <ul>
                    {data.allUsers.map(user => 
                        <li key={user.id}>
                        <img src={user.avatar} 
                                width={48} 
                                height={48} 
                                alt="" />
                        {user.name}
                        </li>
                    )}
                </ul>
                <button onClick={() => refetch()}>Refetch Users</button>
            </div>
            
        }
    </Query>   

export default Users