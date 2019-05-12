import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/app.container'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
