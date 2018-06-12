import {request} from 'graphql-request'

const query = `{ allPhotos { name }}`
const url   = 'http://localhost:4000/graphql'

request(url, query)
  .then(console.log)


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
