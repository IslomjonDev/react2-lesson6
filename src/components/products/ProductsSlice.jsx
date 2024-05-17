import React from 'react'
import './Products.css'
import { useGetProductsQuery } from '../../context/api/productsApi';

const ProductsSlice = () => {

    let {data} = useGetProductsQuery()
    const products = data?.map((el) => 
        <div key={el.id} className="card">
            <img width={200} src={el.images} alt="" />
            <h2>{el.name}</h2>
        </div>

    )
  return (
    <>
            <div className="container">
              <h1>Products</h1>
              <div className="wrapper">
                {products}
              </div>
        </div>
    </>
  )
}

export default ProductsSlice