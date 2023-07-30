import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchApi,getData,api_url } from '../ultilities'
import { Link } from 'react-router-dom'

function Main() {
    const [product,setProduct] = useState([])

    useEffect(()=>{
        getData(api_url).then(res=>setProduct(res))

    },[])

  return (
    <div style={{display : 'flex',gap: "10px"}}>
        {product.map(pro=>{
            const {id , name ,price} = pro
            return (
            <div>
                    <h3>{name}</h3>
                    <p>{price}</p>
                    <button><Link to={`detail/${id}`}>Go to {name} detail</Link></button>
            </div>
            )
        })}
       
        
    </div>
  )
}

export default Main