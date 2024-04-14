import { Button, Card, Form, Input, Modal, Select } from 'antd'

const Invoice = ({ isModalOpen, setisModalOpen }) => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Modal title="Yeni Fatura Oluştur" open={isModalOpen} footer={false} onCancel={() => setisModalOpen(false)}>

      <Form layout={'vertical'} onFinish={onFinish}>
        <Form.Item label="Müsteri Adı" name={"name"} rules={[{ required: true, message: 'İsim alanı zorunludur' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Telefon Numarası" name={"phone"} rules={[{ required: true, message: 'Telefon numarası zorunludur.' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Ödeme Yöntemi" name={"cash"} rules={[{ required: true, message: 'Lütfen bir ödeme yöntemi seçiniz.' }]}>
          <Select>
            <Select.Option value='Nakit'>Nakit</Select.Option>
            <Select.Option value='kredi-kart'>Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>

        <Card title="Toplam Siparişler" bordered={false} >
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
          <div >
            <Button htmlType="submit" className='mt-2 w-full text-center' size='large' type='primary'>Sipariş oluştur</Button>
          </div>
        </Card>

      </Form>


    </Modal>
  )
}

export default Invoice