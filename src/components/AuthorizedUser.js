import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const GITHUB_AUTH_MUTATION = gql`
    mutation authorize($code:String!) {
        githubAuth(code:$code) {
            token
            user {
                id
            }
        }
    }
`

class AuthorizedUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            signingIn: false
        }
    }

    requestCode() {
        const clientID = process.env.REACT_APP_CLIENT_ID
        window.location = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=user`
    }

    componentDidMount() {
        const { history } = this.props
        if (window.location.search.match(/code=/)) {
            this.setState({ signingIn: true })
            const code = window.location.search.replace("?code=", "")
            alert(`code: ${code}`)
            this.setState({ signingIn: false })
            history.replace('/')
        }
    }

    render() {
        return <button onClick={this.requestCode} disabled={this.state.signingIn}>
            Sign In with Github
        </button>
    }

}

export default withRouter(AuthorizedUser) 
