import { useState } from 'react'
import ProductsSlice from '../../components/products/ProductsSlice'
import { useGetProductsQuery } from '../../context/api/productsApi'

const ManageProducts = () => {
  const [reload, setReload] = useState(true)
  let {data, loading,error} = useGetProductsQuery("/products", reload)

  return (
    <div>
      <h2>ManageProducts</h2>
      <ProductsSlice setReload={setReload} isAdmin={true} data={data}/>

    </div>
  )
}

export default ManageProducts