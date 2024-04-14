import { Button, Form, Input, message, Table ,Modal , Select} from "antd";
import React, { useEffect, useState } from "react";

const Edit = () => {
   
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [editItem, setEditItem] = useState([]);
    const [editModalOpen , setEditModalOpen] = useState(false)
    const [form] = Form.useForm();
    
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/product/get-all");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };

        getProducts();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/category/get-all");
                const data = await res.json();
                data && setCategories(data.map((item)=>{
                    return{...item , value:item.title};
                }))
            } catch (error) {
                console.log(error);
            }
        };

        getCategories();
    }, []);

    const onFinish = (values) => {
        console.log(values);
        try {
            fetch("http://localhost:5000/api/product/update-product", {
                method: "PUT",
                body: JSON.stringify({ ...values , id : editItem._id }),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            form.resetFields();
            message.success("Kategori başarıyla güncellendi.");
            setProducts(
                products.map((item) => {
                  if (item._id === editItem._id) {
                    return values;
                  }
                  return item;
                })
              );
        } catch (error) {
            message.error("Bir şeyler yanlış gitti.");
            console.log(error);
        }
    };

    const deleteProduct = (id) => {
        if (window.confirm("Emin misiniz?")) {
            try {
                fetch("http://localhost:5000/api/product/delete-product", {
                    method: "DELETE",
                    body: JSON.stringify({ id: id }),
                    headers: { "Content-type": "application/json; charset=UTF-8" },
                });
                message.success("Kategori başarıyla silindi.");
                setProducts(products.filter((item) => item._id !== id));
            } catch (error) {
                message.error("Bir şeyler yanlış gitti.");
                console.log(error);
            }
        }
    };

    const columns = [
        {
            title: "Ürün Adı",
            dataIndex: "title",
            width: "8%",
            render: (_, record) => {
                return <p>{record.title}</p>;
            },
        },
        {
            title: "Ürün Görseli",
            dataIndex: "img",
            width: "4%",
            render: (_, record) => {
                return (
                    <img src={record.img} alt="" className="w-full h-20 object-cover" />
                );
            },
        },
        {
            title: "Ürün Fiyatı",
            dataIndex: "price",
            width: "8%",
        },
        {
            title: "Kategori",
            dataIndex: "category",
            width: "8%",
        },
        {
            title: "Action",
            dataIndex: "action",
            width: "8%",
            render: (_, record) => {
                return (
                    <div>
                        <Button type='link' onClick={() => { setEditModalOpen(true); setEditItem(record)}}  >Düzenle</Button>
                        <Button type="link" danger onClick={() => deleteProduct(record._id)}>Sil</Button>
                    </div>
                );
            },
        },
    ];

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <>
            <Table
                bordered
                dataSource={products}
                columns={columns}
                rowKey={"_id"}
                scroll={{
                    x: 1000,
                    y: 600,
                }}
            />

            <Modal title="Kategori Ekle" open={editModalOpen} onCancel={() => setEditModalOpen(false)} footer={false}>
                <Form layout={'vertical'} onFinish={onFinish} form={form} initialValues={editItem}>

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

        </>
    );
};

export default Edit;