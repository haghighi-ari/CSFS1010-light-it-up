import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TheApp, { x, y as z } from './App'

// logging named imports (see console in browser)
console.log(x)
console.log(z)

ReactDOM.render(
  <React.StrictMode>
    <TheApp />
  </React.StrictMode>,
  document.getElementById('root') // root element in html
)
