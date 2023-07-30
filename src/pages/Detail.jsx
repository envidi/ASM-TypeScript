import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail({products}) {
    const [detail,setDetail ] = useState({})

    const {id} = useParams()
    const singleProduct = products.find(product => product.id == id)
    if(!singleProduct)return

  return (
    <div>
        <div>
            <h3>{singleProduct.name}</h3>
            <p>{singleProduct.price}</p>
        </div>
    </div>
  )
}

export default Detail