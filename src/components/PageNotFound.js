import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => (
    <div>
        <h2>The page you are trying to reach does not exist</h2>
        <Link to="/">Go Home</Link>
    </div>
)

export default PageNotFound