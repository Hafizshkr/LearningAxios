import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import DataList from './component/dataList'




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
    
    <div className="">
        <table class=" text-sm  text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Image
                </th>
            </tr>
        </thead>
        <DataList listOfItem={listOfItem}/>
        </table>
    </div>
    
   

    

    </>
  )
}

export default App