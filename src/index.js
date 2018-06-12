import {request} from 'graphql-request'
const query = `{ hero { name __typename } }`
const url   = 'https://mpjk0plp9.lp.gql.zone/graphql'

request(url, query)
  .then(({hero}) => `<h1>The hero is ${hero.name}!</h1><p>He is a ${hero.__typename}</p>`)
  .then(text => document.body.innerHTML = text)


// const options = {
//   method: 'POST',
//   headers: {'Content-Type': 'application/json'},
//   body: JSON.stringify({query}),
// }

// fetch(url, options)
//   .then(res => res.json())
//   .then(({data}) => `<p>Photos: ${data.allPhotos.map(photo=>photo.name)}</p>`)
//   .then(text => document.body.innerHTML = text)
//   .catch(console.error)
