import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {

    let isLogin = localStorage.getItem("x-auth-token")

  return (
    <>
     <header>
        <div className="container">
            <div className="navbar">
                <NavLink to={"/"}>
                    <h2>Logo</h2>
                </NavLink>
                <NavLink to={"/"}>
                    <p>Home</p>
                </NavLink>
                <NavLink to={"/users"}>
                    <p>Users</p>
                </NavLink>
                <NavLink className='header__link ' to={isLogin ? "/admin/createProduct" : "/login"}>
                {isLogin ? "Account" : "Login"}
                </NavLink>
            </div>
        </div>
     </header>
    </>

  )
}

export default Header