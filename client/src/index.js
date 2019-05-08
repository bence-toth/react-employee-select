import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app.container'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
