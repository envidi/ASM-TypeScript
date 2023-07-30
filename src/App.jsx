import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes , Route, useNavigate} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Detail from './pages/Detail'
import { api_url, createData, deleteData, getData, updateData } from './ultilities'
import { useEffect } from 'react'
import List from './pages/Admin/List'
import Add from './pages/Admin/Add'
import Edit from './pages/Admin/Edit'

function App() {
  const navigate = useNavigate()
  const [products,setProducts] = useState([])
  useEffect(()=>{
    getData(api_url).then(data=>setProducts(data))
  },[])

  const deleteProduct = (id)=>{
    deleteData(api_url,id)
    setProducts(products.filter(pro=>pro.id != id))
  }
  const addProduct = (product)=>{
    createData(api_url,product,()=>{
      console.log('add product successfully')
    })
    navigate('/list')
    getData(api_url).then(data=>setProducts(data))
  }
  const updateProduct = (product,id)=>{
    updateData(api_url,product,id)
    navigate('/list')
    getData(api_url).then(data=>setProducts(data))
  }


  return (
    <>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/detail/:id' element={<Detail products={products}/>}/>
      <Route path='/list' element={<List products={products} deleteProduct={deleteProduct}/>}/>
      <Route path='/add' element={<Add addProduct={addProduct} />}/>
      <Route path='/edit/:id' element={<Edit updateProduct={updateProduct} products={products}/>}/>
     </Routes>
    </>
  )
}

export default App
