import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => (
    <div className="container__inner">
        <h2>The page you are trying to reach does not exist</h2>
        <Link to="/">Go Home</Link>
    </div>
)

export default PageNotFound