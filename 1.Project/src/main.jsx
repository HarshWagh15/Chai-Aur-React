import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
 
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:"_blank"},
  'Click me to go on Google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   reactElement
  // </React.StrictMode>,
  reactElement
)
