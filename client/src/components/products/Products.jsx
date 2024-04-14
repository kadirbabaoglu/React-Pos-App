import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import Add from './Add';
import { useNavigate } from 'react-router-dom';

const Products = ({categories}) => {

  const [products, setProducts] = useState()
  const [addModalOpen , setAddModalOpen] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {

    const getAllData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/product/get-all");
        const fromData = await response.json();
        setProducts(fromData)
      } catch (error) {
        console.log(error)
      }
    }
    getAllData()
  }, [])

  return (
    <div className='product-container grid grid-cols-card gap-3 max-w-4xl'>
      {products?.map((item, key) => (

       <ProductItem item={item} key={key} />

      ))}

      <div className="producs-item border rounded-md cursor-pointer hover:shadow-lg transition-all select-none bg-green-200 px-6 py-6 hover:bg-slate-400 flex justify-center items-center md:text-2xl">
        <PlusOutlined onClick={()=>setAddModalOpen(true)} />
      </div>

      <div className="producs-item border rounded-md cursor-pointer hover:shadow-lg transition-all select-none bg-gray-200 px-6 py-6 hover:bg-slate-400 flex justify-center items-center md:text-2xl">
        <EditOutlined onClick={()=>navigate("/products")} />
      </div>
        <Add addModalOpen={addModalOpen} setaddModalOpen={setAddModalOpen} categories={categories} products={products} setProducts={setProducts} />

    </div>

  )
}

export default Products