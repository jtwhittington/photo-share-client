import React from 'react'
import { PostPhotoForm } from './ui'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const POST_PHOTO_MUTATION = gql`
    mutation addPhoto($input: PostPhotoInput!) {
        postPhoto(input:$input) {
            id
            name
            url
            postedBy {
                avatar
                name
            }
        }
    }
`

const PostPhoto = ({ history, location }) => {
    const photoFile = location.state && location.state.photoToUpload
    const photoSrc = location.state && location.state.photoSrc
    const token = localStorage.getItem('token')

    if (!token) {
        history.replace('/')
    }

    return (
        <Mutation mutation={POST_PHOTO_MUTATION}>
            {mutation => 
                <PostPhotoForm 
                    photoFile={photoFile} 
                    photoSrc={photoSrc} 
                    onSubmit={input => 
                        mutation({ variables: { input }})
                            .then(() => history.push('/'))
                            .catch(console.error)
                    } 
                />
            }
        </Mutation>
        
    )
}

export default PostPhoto    