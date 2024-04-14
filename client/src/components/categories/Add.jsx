import React from 'react'
import { Button, Form, Input, Modal, message,  } from 'antd';

const Add = ({categories, setCategories , addModalOpen, setaddModalOpen}) => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        try {
            fetch("http://localhost:5000/api/category/add-category", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            message.success("Kategori başarıyla eklendi.");
            form.resetFields();
            setCategories([...categories, {_id : Math.random() , title : values.title}]);
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <Modal title="Kategori Ekle" open={addModalOpen} onCancel={() => setaddModalOpen(false)} footer={false}>

            <Form layout={'vertical'} onFinish={onFinish} form={form}>

                <Form.Item label="Kategori" name={'title'} rules={[{ required: true, message: 'Bu alan boş geçilemez' }]}>
                    <Input />
                </Form.Item>

                <Form.Item className='flex justify-end mb-0'>
                    <Button type='primary' htmlType='submit' >Ekle</Button>
                </Form.Item>

            </Form>

        </Modal>
    )
}

export default Add