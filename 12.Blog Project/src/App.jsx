import {useDispatch} from 'react-redux' 
import React,{ useState,useEffect } from 'react'
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice.js'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import {Outlet} from 'react-router-dom'


function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  //when you are making network request from any network it requires some time ,
  //so it is considered to make an loading request so we can do conditional rendering ,
  // in order to overcome that.

  const [loading, setLoading]=useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    //if getcurrentUser Sucessfully got then use .then ,
    //.finally will always run whether others runs or not. 
    .then((userData) => {
      if (userData) {
        //dispatch login with object which has some userData which we declared it in authslice.js file in login
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => 
      setLoading(false)
  )
  }, [])

return !loading ? (
<div className='min-h-screen flex flex-wrap
content-between bg-gray-400'>
<div className='w-full block'>
  <Header />
  <main>
    TODO:<Outlet />
  </main>
  <Footer />
</div>
</div>
) : null
}

export default App
