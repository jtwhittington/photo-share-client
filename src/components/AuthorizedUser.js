import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'
import { ALL_USERS_QUERY } from './Users'

const GITHUB_AUTH_MUTATION = gql`
    mutation authorize($code:String!) {
        githubAuth(code:$code) {
            token
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
            <Mutation mutation={GITHUB_AUTH_MUTATION} 
                update={this.authorizationComplete}
                refetchQueries={[{ query: ALL_USERS_QUERY }]}>
            
                {authorize => {
                    this.authorize = authorize
                    return (
                        <button onClick={this.requestCode} disabled={this.state.signingIn}>
                            Sign In with Github
                        </button>  
                    )
                }}
        
            </Mutation>
        )
    }

}

export default withRouter(AuthorizedUser) 
