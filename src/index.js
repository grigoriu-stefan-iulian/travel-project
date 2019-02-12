import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import WebFont from 'webfontloader'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'

WebFont.load({
    google: {
        families: ['Montserrat: 400, 500, 700, 900', 'sans-serif']
    }
})

ReactDOM.render(<AppRouter />, document.getElementById('root'))