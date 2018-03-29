import React from 'react'
import { gql } from 'apollo-boost'
import { Query, Mutation } from 'react-apollo'

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
        {({data, loading }) => loading ?
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
                <Mutation mutation={ADD_FAKE_USERS_MUTATION} 
                    update={updateLocalCache}>
                    {addFakeUsers => {
                        let count = 1
                        return (
                            <div>
                                <input type="Number" 
                                    defaultValue={1} 
                                    onChange={({target}) => count = target.value} />
                                <button onClick={() => addFakeUsers({ variables: {count}})}>
                                    Add Fake Users
                                </button>
                            </div>
                        )
                    }}
                </Mutation>
            </div>
            
        }
    </Query>   

export default Users