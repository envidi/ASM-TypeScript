

const api_url = 'http://localhost:3000/products'

const fetchApi = async(api)=>{
    try {
        const response = await fetch(api)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)

    }
}
const getData = (api)=>{
    return new Promise((resolve, reject) => {
        const data = fetchApi(api)
        resolve(data)
    })
}
const createData = (api, product,callback)=>{
    const options = {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',

        },
        body  : JSON.stringify(product)

    }
    fetch(api, options)
    .then(res=>res.json())
    .then(callback)
}
const updateData = (api, product,id)=>{
    const options = {
        method : 'PUT',
        headers : {
            'Content-Type': 'application/json',

        },
        body  : JSON.stringify(product)

    }
    fetch(api + '/'+id, options)
    .then(res=>res.json())
    .then(()=>{
        console.log('Updated product successfully')
    })
}

const deleteData = (api, id)=>{
    const options = {
        method : 'DELETE',
      

    }
    fetch(api + '/'+id, options)
    .then(res=>res.json())
    .then(()=>{
        console.log('Delete product successfully')
    })
}

export {
    api_url,fetchApi,getData,deleteData,updateData,createData
}