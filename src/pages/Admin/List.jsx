import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function List({products,deleteProduct}) {
    
    const handleDelete = (id)=>{
        deleteProduct(id)
    }

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((pro,index)=>{
                    const {id , name , price } = pro
                    return (
                        <tr key={index}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{price}</td>
                            <td><button onClick={()=>handleDelete(id)}>Delete</button></td>
                            <td><button><Link to={`/edit/${id}`}>Edit</Link></button></td>
                    </tr>
                    )
                })}
              
            </tbody>
        </table>

    </div>
  )
}

export default List