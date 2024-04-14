import React from 'react'

const ProductItem = ({item}) => {
  return (
    <>
     <div className="producs-item border rounded-md cursor-pointer hover:shadow-lg transition-all select-none" key={item._id}>
          <div className="img">
            <img src={item.img} className='h-40 object-cover w-full border-b rounded-md' alt="" />
          </div>
          <div className="products-info flex flex-col p-3 rounded-md">
            <span>{item.title}</span>
            <span>{item.price}</span>
          </div>
        </div>
    </>
  )
}

export default ProductItem