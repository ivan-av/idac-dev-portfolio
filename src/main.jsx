import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* Configuration of the react-router-dom library, using HashRouter */}
      <HashRouter>
        <App />
      </HashRouter>
  </React.StrictMode>
)
