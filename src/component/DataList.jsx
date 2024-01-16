import React from 'react'

const DataList = ({listOfItem}) => {

    console.log(listOfItem)
  return (
    <>
     
    
    <div className="container flex justify-center pb-10 flex-wrap ">
    {listOfItem.map((products) =>
    <div className=" max-w-sm rounded overflow-hidden shadow-lg text-black mx-2 my-2" key={products.id}>
      <img className="w-full" src={products.thumbnail}/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{products.title}</div>
        <div className="font-semibold text-xl mb-2">RM {products.price}</div>
        <p className="text-black-700 text-base">
        {products.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{products.category}</span>
      </div>
    </div>
    
    
    )}
    </div>

    
    
    </>
  )
}

export default DataList