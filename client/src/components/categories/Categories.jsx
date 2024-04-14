import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import Add from './Add';
import Edit from './Edit';

const Categories = ({ categories, setCategories }) => {

    const [addModalOpen, setaddModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    return (
        <ul className='flex gap-3 md:flex-col select-none'>

            {categories?.map((item) => (

                <li key={item._id} className='bg-yellow-200 px-6 py-6 rounded-xl cursor-pointer hover:bg-slate-400 transition-all text-center flex justify-items-center'>
                    <span>{item.title}</span>
                </li>

            ))}

            <li onClick={() => setaddModalOpen(true)} className='bg-green-200 px-6 py-6 rounded-xl cursor-pointer hover:bg-slate-400 transition-all text-center'>
                <PlusOutlined />
            </li>
            <li onClick={() => setEditModalOpen(true)} className='bg-gray-200 px-6 py-6 rounded-xl cursor-pointer hover:bg-slate-400 transition-all text-center'>
                <EditOutlined />
            </li>

            <Add addModalOpen={addModalOpen} setaddModalOpen={setaddModalOpen} categories={categories} setCategories={setCategories} />
            <Edit editModalOpen={editModalOpen} setEditModalOpen={setEditModalOpen} categories={categories} setCategories={setCategories} />
        </ul>

    )
}

export default Categories