import React from 'react'
import { useState } from 'react'
function Add({addProduct}) {
    const [newPro,setNewPro] = useState({name :'',price:''})

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
        addProduct(newPro)

    }
  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="">Name</label>
            <input type="text" name='name' placeholder='name' onChange={handleChange} />
            <label htmlFor="">Price</label>
            <input type="text" name='price' placeholder='price' onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Add