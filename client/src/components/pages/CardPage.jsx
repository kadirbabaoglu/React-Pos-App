import React, { useState } from 'react'
import Header from '../header/Header'
import Invoice from '../card/Invoice';
import { Button, Card, Table } from 'antd';

const CardPage = () => {
    const [isModalOpen , setisModalOpen] = useState(false)
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <>
            <Header />
            <div className='max-w-7xl mx-auto'>
                <Table dataSource={dataSource} columns={columns} bordered pagination={false} />
                <div className="total-price flex justify-end mt-4 shadow-xl">
                    <Card title="Toplam Siparişler" bordered={false} style={{ width: 300 }}>
                        <div className="ara-toplam flex justify-between">
                            <span>Ara Toplam</span>
                            <span>200₺</span>
                        </div>
                        <div className="KDV flex justify-between text-red-400">
                            <span>KDV %8</span>
                            <span>200₺</span>
                        </div>
                        <div className="toplam flex justify-between">
                            <span>Toplam</span>
                            <span>200₺</span>
                        </div>
                        <Button className='mt-2 w-full text-center' onClick={() => setisModalOpen(true)} size='large' type='primary'>Sipariş oluştur</Button>
                    </Card>
                </div>
            </div>

            <Invoice isModalOpen={isModalOpen} setisModalOpen={setisModalOpen}  />
        </>
    )
}

export default CardPage