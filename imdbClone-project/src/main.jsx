import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap

// Router
import {BrowserRouter} from 'react-router-dom'
// Router

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
