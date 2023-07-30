import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
function Edit({updateProduct,products}) {
    const [newPro,setNewPro] = useState({name :'',price:''})
    const {id } = useParams()
    const getSinglePro = products.find(item=> item.id == id)
    useEffect(()=>{
        if(!getSinglePro)return
        setNewPro(getSinglePro)
    },[id,products])
    
    const handleChange = (e)=>{
        const target = e.target
        const value = target.value
        const name = target.name

        setNewPro({
            ...newPro,
            [name]: value
        })
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        updateProduct(newPro,id)

    }
  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="">Name</label>
            <input type="text" name='name' placeholder='name' onChange={handleChange} value={newPro.name} />
            <label htmlFor="">Price</label>
            <input type="text" name='price' placeholder='price' onChange={handleChange}  value={newPro.price}    />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Edit