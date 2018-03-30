import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { Mutation, Query, withApollo, compose } from 'react-apollo'
import { ALL_USERS_QUERY } from './Users'
import { Auth } from './ui'

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
        this.logout = this.logout.bind(this)
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

    logout() {
        localStorage.removeItem('token')
        this.props.client.writeQuery({ 
            query: ME_QUERY,
            data: {
                me: null
            } 
        })
        this.setState({ signingIn: false })
    }

    render() {
        return (
            <Query query={ME_QUERY}>
                {({ loading, data }) => 
                    <Mutation mutation={GITHUB_AUTH_MUTATION}
                        refetchQueries={[{ query: ME_QUERY }]}
                        update={this.authorizationComplete}>
                        {authorize => {
                            this.authorize = authorize
                            return <Auth me={data.me} loading={loading} 
                                clientID={process.env.REACT_APP_CLIENT_ID}
                                signingIn={this.state.signingIn} 
                                onSignOut={this.logout} 
                                onPostPhotoClick={() => this.props.history.push('/newPhoto')} />
                        }}
                    </Mutation>
                }
            </Query>
        )
    }

}

export default compose(withRouter, withApollo)(AuthorizedUser) 
