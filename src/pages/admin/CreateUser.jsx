import React, { useState } from 'react'


let initialState = {
  nomi:"",
  narxi: "",
}

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState(initialState)
  const handleCreate = e =>{
    e.preventDefault()
 
  }
  return (
    <div>
        <h2>CreateUser</h2>
        <form onSubmit={handleCreate} action="">
          <input 
            value={newProduct.nomi} 
            onChange={e => setNewProduct(prev => ({...prev, nomi: e.target.value}))} 
            type="text" 
            placeholder='Ismi' />
          <input 
            value={newProduct.narxi} 
            onChange={e => setNewProduct(prev => ({...prev, narxi: +e.target.value}))} 
            type="number" 
            placeholder='Yoshi' />
          <button>Create</button>
        </form>
    </div>
  )
}

export default CreateProduct