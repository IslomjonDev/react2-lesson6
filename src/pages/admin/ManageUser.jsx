import { useState } from 'react'
import {  useGetUsersQuery } from '../../context/api/productsApi'
import UsersSlice from '../../components/users/UsersSlice'

const ManageUsers = () => {
  const [reload, setReload] = useState(true)
  let {data, loading,error} = useGetUsersQuery("/users", reload)

  return (
    <div>
      <h2>ManageProducts</h2>
      <UsersSlice setReload={setReload} isAdmin={true} data={data}/>

    </div>
  )
}

export default ManageUsers