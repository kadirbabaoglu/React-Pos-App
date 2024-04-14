import React from 'react'
import { FileSearchOutlined, LoginOutlined, HomeOutlined, ShoppingCartOutlined, CopyOutlined, UsergroupAddOutlined, LineChartOutlined } from '@ant-design/icons';
import { Badge, Input } from 'antd';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className='border mb-6 rounded-xl max-w-7xl mx-auto md:bg-yellow-200 bg-yellow-200'>
            <header className='py-4 px-6 flex justify-between items-center gap-5'>
                <div className="logo">
                    <a href="/">
                        <img src="https://sambapos.com/wp-content/uploads/sambapos_logo.png" className='h-8' alt="" />
                    </a>
                </div>
                <div className="serach-bar flex-1 flex justify-center items-center">
                    <Input size="large" className='rounded-full max-w-[800px]' placeholder="Search...!" prefix={<FileSearchOutlined />} />
                </div>

                <div className="menu-links flex justify-between items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto w-full left-0 px-3 py-3 md:border-none border rounded-xl md:bg-transparent bg-yellow-200">
                    <Link to='/' className='flex flex-col hover:text-blue-500 transition-all'>
                        <HomeOutlined className='text-xl md:text-2xl' />
                        <span className='text-[12px]' >Anasayfa</span>
                    </Link>

                    <Badge count={5} className='md:flex hidden'>
                        <Link to='/card' className='flex flex-col'>

                            <ShoppingCartOutlined className='text-xl md:text-2xl  hover:text-blue-500 transition-all' />
                            <span className='text-[12px]' >Sepet</span>

                        </Link>
                    </Badge>

                    <Link to='/invoices' className='flex flex-col'>
                        <CopyOutlined className='text-xl md:text-2xl  hover:text-blue-500 transition-all' />
                        <span className='text-[12px]' >Faturalar</span>
                    </Link>

                    <Link to='/customers' className='flex flex-col'>
                        <UsergroupAddOutlined className='text-xl md:text-2xl  hover:text-blue-500 transition-all' />
                        <span className='text-[12px]' >Kulanıcılar</span>
                    </Link>

                    <Link to='/statistic' className='flex flex-col'>
                        <LineChartOutlined className='text-xl md:text-2xl  hover:text-blue-500 transition-all' />
                        <span className='text-[12px]' >İstatistikler</span>
                    </Link>
                    
                    <a href='/' className='flex flex-col'>
                        <LoginOutlined className='text-xl md:text-2xl  hover:text-blue-500 transition-all' />
                        <span className='text-[12px]' >Çıkış</span>
                    </a>
                </div>
                <Badge count={5} className='md:hidden flex'>
                    <a href='/' className='flex flex-col'>

                        <ShoppingCartOutlined className='text-xl md:text-2xl  hover:text-blue-500 transition-all' />
                        <span className='text-[12px]' >Sepet</span>

                    </a>
                </Badge>
            </header>
        </div>
    )
}

export default Header