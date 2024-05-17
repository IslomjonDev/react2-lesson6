import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const Login = () => {

  let navigate = useNavigate();


  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const handleLogin = e => {
    e.preventDefault()
    let newUser = {
      username , 
      password
    }

    axios
    .post('https://dummyjson.com/auth/login', newUser) 
    .then(res => {
      console.log(res.data)
      localStorage.setItem("x-auth-token", res.data.token)
      navigate("/admin/")
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => setLoading(false))
    .post('https://dummyjson.com/auth/login', newUser) 
    .then(res => {
      console.log(res.data)
      localStorage.setItem("x-auth-token", res.data.token)
      navigate("/admin/create")
    })
    .catch(err => {
      console.log(err);
    })
    .finally()


    setPassword("")
    setUsername("")
  }
  return (
    <>
     
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleLogin} action="">
          <span>
          <label htmlFor="">Your username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
          </span>
          <span>
            <label htmlFor="">Password</label>
          <input value={password}  onChange={(e) => setPassword(e.target.value)} type="password" />
          </span>
          <button type='onsubmit'>Login</button>
        </form>
      </div>

    </>
  )
}

export default Login