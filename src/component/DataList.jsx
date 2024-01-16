import React from 'react'

const DataList = ({listOfItem}) => {

    console.log(listOfItem)
  return (
    <>
    {listOfItem.map((products) =>
    
    <tbody key={products.id}>

       <tr class="  odd:bg-white even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    {products.title}
                </th>
                <td class="px-6 py-4 text-black">
                    {products.category}
                </td>
                <td class="px-6 py-4 text-black">
                {products.price}
                </td>
                <td class="text-center px-6 py-4 text-black">
                {products.description}
                </td>
                <td class="px-6 py-4 text-black ">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline h-2 w-2"><img src={products.thumbnail}/></a>
                </td>
            </tr>
    
    
    </tbody> )}
    
    </>
  )
}

export default DataList