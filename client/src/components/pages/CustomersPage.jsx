import Header from '../header/Header'
import {  Table } from 'antd';

const CustomersPage = () => {
    
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
                    
                </div>
            </div>
        </>
    )
}

export default CustomersPage