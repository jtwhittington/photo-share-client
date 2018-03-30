import React from 'react'

const PostPhoto = ({ history }) =>
    <div>
        <h1>TODO: Post Photo</h1>
        <button onClick={() => history.goBack()}>
            Cancel
        </button>
    </div>

export default PostPhoto    