import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import app component
import App from './App'

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Import BrowserRouter to allow linking of pages in app
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
