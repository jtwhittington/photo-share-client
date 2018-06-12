import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import App from './components/App'
import createClient from './createClient'

render(
  <ApolloProvider client={createClient()}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
