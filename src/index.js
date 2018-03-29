import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import App from './components/App'
import createClient from './createClient'

console.log('Environment Vars: ', process.env)

render(
  <ApolloProvider client={createClient({ persist: false })}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)  