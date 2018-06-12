import React from 'react'
import {gql} from 'apollo-boost'
import {Query, Mutation} from 'react-apollo'

const ALL_USERS_QUERY = gql`
  query allUsers {
    allUsers {
      id
      name
      avatar
      githubLogin
    }
  }
`

const ADD_FAKE_USERS_MUTATION = gql`
  mutation addFakeUsers($count: Int!) {
    addFakeUsers(count: $count) {
      id
      name
      avatar
      githubLogin
    }
  }
`

const updateLocalCache = (cache, {data}) => {
  const { allUsers } = cache.readQuery({query: ALL_USERS_QUERY})
  cache.writeQuery({
    query: ALL_USERS_QUERY,
    data: {
      allUsers: [
        ...allUsers,
        ...data.addFakeUsers,
      ]
    }
  })
}


const Users = () =>
  <Query query={ALL_USERS_QUERY}>
    {({data, loading}) => loading
      ? <p>Loading users...</p>
      : <div>
        <ul>{data.allUsers.map(user =><li key={user.id}>{user.name}</li>)}</ul>
        <Mutation
          mutation={ADD_FAKE_USERS_MUTATION}
          variables={{count: 10}}
          update={updateLocalCache}
        >
          { addFakeUsers => {
            let count = 1
            return (
              <div>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  onChange={({target}) => count = target.value}
                />
                <button onClick={() => addFakeUsers({variables: {count}})}>
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
