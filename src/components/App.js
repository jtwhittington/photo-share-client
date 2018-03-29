import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Users from './Users'
import AuthorizedUser from './AuthorizedUser'

const App = () => 
    <BrowserRouter>
        <div>
            <AuthorizedUser />
            <Users />
        </div>
    </BrowserRouter>

export default App