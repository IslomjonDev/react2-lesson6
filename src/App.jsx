import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Users from './pages/users/Users'
import Admin from './pages/admin/Admin'
import CreateProduct from './pages/admin/CreateProduct'
import ManageProduct from './pages/admin/ManageProduct'
import CreateUser from './pages/admin/CreateUser'
import ManageUser from './pages/admin/ManageUser'
import Login from './pages/login/Login'
import { Toastify } from 'toastify'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/admin' element={<Admin/>}>
                <Route path='createProduct' element={<CreateProduct/>}/>
                <Route path='manageProduct' element={<ManageProduct/>}/>
                <Route path='createUser' element={<CreateUser/>}/>
                <Route path='manageUser' element={<ManageUser/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
        </Routes>
        <ToastContainer/>
    </>
  )
}


export default App
