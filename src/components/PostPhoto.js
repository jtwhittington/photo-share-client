import React from 'react'
import { PostPhotoForm } from './ui'

const PostPhoto = ({ history, location }) => {
    const photoFile = location.state && location.state.photoToUpload
    const photoSrc = location.state && location.state.photoSrc
    const token = localStorage.getItem('token')

    if (!token) {
        history.replace('/')
    }

    return (
        <PostPhotoForm 
            photoFile={photoFile} 
            photoSrc={photoSrc} 
            onSubmit={photo => {
                console.log('todo: submit photo', photo)
                history.push('/')
            }} />
    )
}

export default PostPhoto    