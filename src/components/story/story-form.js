import React, { useState } from 'react'
import { Input, Form, Button } from 'antd';
import UploadImage from 'components/common/uploadImage'
import { useSelector, shallowEqual } from 'react-redux'
import { LoadingOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export default function StoryForm() {

  const [form] = Form.useForm();
  const [image, setImage] = useState(null)
  const state = useSelector(stateSelector, shallowEqual)

  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }

  const upload = (imageUrl) =>{
    setImage(imageUrl)
  }

  const onFinish = async (value) =>{
    console.log(value, image)
  }

  return (
    <div className="story-form">
      <Form
        {...formItemLayout}
        layout={'horizontal'}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item 
          label="Tên Story" 
          name="title"
          rules={[
            {
              required: true,
              message: 'Tên story là bắt buộc',
            },
          ]}>
          <Input placeholder="Tên story" />
        </Form.Item>
        <Form.Item 
          label="Nội dung" 
          name="content"
          rules={[
            {
              required: true,
              message: 'Nội dung là bắt buộc',
            },
          ]}>
          <TextArea rows={4} placeholder="Nội dung" />
        </Form.Item>
        <Form.Item 
          label="Ảnh đại diện" 
          >
          <UploadImage upload={upload}/>
        </Form.Item>
        <Form.Item >
          {
            state.loading ? <LoadingOutlined /> : 
            <Button type="primary" className="pheria-btn" htmlType="submit">Đăng</Button>
          }
        </Form.Item>
      </Form>
    </div>
  )
}

function stateSelector(state) {
  return {
    loading: state.story.loading,
  }
}