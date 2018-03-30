import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import moment from 'moment'

export const LIST_PHOTOS = gql`
    query listPhotos {
        allPhotos {
            id
            name
            url
            created
            postedBy {
                name
                avatar
            }
        }
    }
`

const Photos = () =>
    <Query query={LIST_PHOTOS}>
        {({ data, loading }) => loading ?
            <p>loading...</p> :
            data.allPhotos.map(photo => 
                <div key={photo.id}>
                    <img src={`http://localhost:4000${photo.url}`} 
                        alt={photo.name} 
                        width={300} />
                    <p>posted by: {photo.postedBy.name}</p>
                    <p>{moment(photo.created).format('dddd, MMMM Do YYYY h:mm a')}</p>
                </div>
            )
        }
    </Query>

export default Photos    