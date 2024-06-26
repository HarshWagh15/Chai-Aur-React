import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

//1st Way:

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout />,

//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About /> 
//       },
//       {
//         path:"contact",
//         element:<Contact /> 
//       }
//     ]
//   }
// ])

// 2nd Way : 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
