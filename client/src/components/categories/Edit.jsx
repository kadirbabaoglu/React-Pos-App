import { useState } from "react";
import { Button, Form, Input, Modal, Table, message } from 'antd'
import FormItem from 'antd/es/form/FormItem';

const Edit = ({ editModalOpen, setEditModalOpen , categories , setCategories}) => {
  
  const [editRow, setEditRow] = useState({});
  
  const onFinish = (values) => {
    try {
      fetch('http://localhost:5000/api/category/update-category',{
        method: "PUT",
        body: JSON.stringify({...values, id: editRow._id}),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
      message.success("Başarıyla güncellendi.")
      setCategories(
        categories.map((item) => {
          if (item._id === editRow._id) {
            return { ...item, title: values.title };
          }
          return item;
        })
      );
    } catch (error) {
      console.log(error)
    }
  }
  
  const deleteCategory = (id) =>{
    try {
      fetch('http://localhost:5000/api/category/delete-category',{
      method: "DELETE",
      body: JSON.stringify({id : id}),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
    message.success('kategori başarı ile silindi')
    setCategories(categories.filter((item)=> item._id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const columns =[
    {
      title:"Kategori Başlık",
      dataIndex : "title",
      render : (_,record) => {
        if(record._id === editRow._id){
          return(
            <FormItem className="mb-0" name='title'>
              <Input defaultValue={record.title} />
            </FormItem>
          )
        }else{
          return <p>{record.title}</p>
        }
      }
    },
    {
      title : "Action",
      dataIndex : "action",
      render : (text , record) =>{
        return(
          <div>
            <Button type='link' onClick={()=>setEditRow(record)} >Düzenle</Button>
            <Button type='text' htmlType="submit" >Kaydet</Button>
            <Button type='text' danger onClick={()=>deleteCategory(record._id)} >Sil</Button>
          </div>
        );
      }
    }
  ]

  return (
    <Modal  title="Kategori Ekle" open={editModalOpen} onCancel={() => setEditModalOpen(false)} footer={false}>
        <Form onFinish={onFinish}>
            <Table dataSource={categories} columns={columns} rowKey={'_id'}>

            </Table>
        </Form>
    </Modal>
  )
}

export default Edit