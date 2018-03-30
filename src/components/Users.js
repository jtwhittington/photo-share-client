import React from 'react'
import { gql } from 'apollo-boost'
import { Query, Mutation } from 'react-apollo'

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
                <Mutation mutation={ADD_FAKE_USERS_MUTATION} variables={{ count: 1 }}>
                    {addFakeUsers => 
                        <button onClick={addFakeUsers}>Add Fake Users</button>
                    }
                </Mutation>
            </div>
            
        }
    </Query>   

export default Users