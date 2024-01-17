import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import DataList from './component/DataList.jsx'




const App = () => {
  
  const url = 'https://dummyjson.com/products'

  const [listOfItem, setListOfItem] = useState([])

  useEffect( () => {
    axios.get(url).then((res) =>{
        setListOfItem(res.data.products)
    }).catch((error) => {console.log("error")})
  }, [] )


  return (

      
    <>   
    
    
        <DataList listOfItem={listOfItem} />
    
    
    
   

    

    </>
  )
}

export default App