import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { PhotoCards } from './ui'

export const LIST_PHOTOS = gql`
    query listPhotos {
        allPhotos {
            id
            name
            description
            category
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
        {({ data, loading }) => <PhotoCards photos={data.allPhotos} loading={loading} />}
    </Query>

export default Photos    