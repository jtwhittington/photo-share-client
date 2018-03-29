import createClient from './createClient'
import { gql } from 'apollo-boost'
  
const client = createClient()

const operation = {
  query: gql`{ totalUsers, totalPhotos }`
}

client.query(operation)
  .then(console.log)
  .catch(console.error)
  