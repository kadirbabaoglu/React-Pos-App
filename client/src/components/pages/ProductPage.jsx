import React from 'react'
import Header from '../header/Header'
import Edit from '../products/Edit'

const ProductPage = () => {
  return (
    <>
    <Header />
    <div className='max-w-7xl mx-auto'>
        <div className="total-price flex justify-end mt-4 shadow-xl">
        </div>
    <Edit/>
    </div>
</>
  )
}

export default ProductPage