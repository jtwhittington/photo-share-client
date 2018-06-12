import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { Mutation, Query } from 'react-apollo'

const GITHUB_AUTH_MUTATION = gql`
  mutation authorize($code:String!) {
    githubAuth(code:$code) {
      token
    }
  }
`

export const ME_QUERY = gql`
  query me {
    me {
      id
      githubLogin
      name
      avatar
    }
  }
`

class AuthorizedUser extends Component {

  constructor(props) {
    super(props)
    this.state = {
      signingIn: false
    }
    this.authorizationComplete = this.authorizationComplete.bind(this)
  }

  requestCode() {
    const clientID = process.env.REACT_APP_CLIENT_ID
    window.location = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=user`
  }

  componentDidMount() {
    if (window.location.search.match(/code=/)) {
      this.setState({ signingIn: true })
      const code = window.location.search.replace("?code=", "")
      this.authorize({ variables: {code} })
    }
  }

  authorizationComplete(cache, { data }) {
    localStorage.setItem('token', data.githubAuth.token)
    this.setState({ signingIn: false })
    this.props.history.replace('/')
  }

  render() {
    return (
      <Query query={ME_QUERY}>
        {({ loading, data }) => data.me ?
          <div>
            <img src={data.me.avatar} width={48} height={48} alt="" />
            <h1>{data.me.name}</h1>
          </div> :
          <Mutation mutation={GITHUB_AUTH_MUTATION}
            update={this.authorizationComplete}>
            {authorize => {
              this.authorize = authorize
              return (
                <button onClick={this.requestCode} disabled={this.state.signingIn}>
                  Sign In with Github
                </button>
              )
            }}
          </Mutation>
        }
      </Query>
    )
  }

}

export default withRouter(AuthorizedUser)
