import React, {useState} from 'react'
import { Link,NavLink, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Common_Button,Input,Login} from "./index"
import authService from '../appwrite/auth'
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux'


function Login() {
    const Navigate= useNavigate()
    const Dispatch =useDispatch()
    return (
        <div></div>
    )
}

export default Login
