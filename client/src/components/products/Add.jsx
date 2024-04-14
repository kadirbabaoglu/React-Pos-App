import React from 'react'
import { Button, Form, Input, Modal, Select, message, } from 'antd';

const Add = ({ categories, setCategories, addModalOpen, setaddModalOpen , products , setProducts }) => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        try {
            fetch("http://localhost:5000/api/product/add-product", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            message.success("Kategori başarıyla eklendi.");
            form.resetFields();
            setProducts([...products, { ...values , _id: Math.random() }]);
        } catch (error) {
            console.log(error);
        }

    }

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <Modal title="Yeni Ürün Ekle" open={addModalOpen} onCancel={() => setaddModalOpen(false)} footer={false}>

            <Form layout={'vertical'} onFinish={onFinish} form={form}>

                <Form.Item label="Ürün Adı" name={'title'} rules={[{ required: true, message: 'Bu alan boş geçilemez' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Ürün Resim" name={'img'} rules={[{ required: true, message: 'Bu alan boş geçilemez' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Ürün Fiyatı" name={'price'} rules={[{ required: true, message: 'Bu alan boş geçilemez' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Ürün Fiyatı" name={'category'} rules={[{ required: true, message: 'Bu alan boş geçilemez' }]}>
                <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={categories}
                />
                </Form.Item>

                <Form.Item className='flex justify-end mb-0'>
                    <Button type='primary' htmlType='submit' >Ekle</Button>
                </Form.Item>

            </Form>

        </Modal>
    )
}

export default Add