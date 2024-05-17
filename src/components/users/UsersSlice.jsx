import React from 'react'
import { useGetUsersQuery } from '../../context/api/productsApi';
import './Users.css'
const UsersSlice = () => {

    let {data} = useGetUsersQuery()
    const users = data?.map((user) => 
         <div key={user.idn} className="userCard">
             <img src={user.url} alt="" />
             <h3>{user.name} </h3>
             <h4>{ user.lastname}</h4>
             <p>{user.age}</p>
          </div>
    )
  return (
    <div>
      <div className="container">
        <h1>Users</h1>
      <div className="userCards">
        {users}
      </div>
      </div>
    </div>
  )
}

export default UsersSlice