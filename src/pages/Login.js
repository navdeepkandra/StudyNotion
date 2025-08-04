import React from 'react'
import Template from '../components/Template'
import login from "../assets/login.png"

const Login = (props) => {
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <Template
    title="Welcome Back"
    desc1="Build skills for today, tomorrow, and beyond"
    desc2="Education to future-proof your career"
    image={login}
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
