import React, { useState } from 'react'
import { Input, Form, Button, message } from 'antd';
import UploadImage from 'components/common/uploadImages'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { LoadingOutlined } from '@ant-design/icons';
import { createUpdateStory } from "store/actions/storyActions"
import axios from "axios"

const { TextArea } = Input;

export default function StoryForm({template, type, imageTemplate}) {
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const [image, setImage] = useState(imageTemplate && imageTemplate.url)
  const state = useSelector(stateSelector, shallowEqual)
  const [photo, setPhoto] = useState(null)

  const upload = (imageUrl) =>{
    console.log(imageUrl)
    setImage(imageUrl)
  }

  const onFinish = async (value) =>{
    const _id = undefined
    const data = {
      _id,
      ...value,
      template,
      image: image,
      type
    }
    const success = await dispatch(createUpdateStory(data))
    if(success) {
      message.success(`${_id ?'Cập nhật story thành công' :'Thêm mới story thành công'}`);
    }
    else{
      message.success(`${_id ?'Cập nhật story thất bại' :'Thêm mới story thất bại'}`);
    }
  }

  const fileUpload = (event) =>{
    console.log(event[0])
    // console.log(value.target.files[0])
    setPhoto(event[0])
  }

  const uploadImage = () =>{
      const data = new FormData();
      data.append('image', photo);
      console.log(data)
      const config = {
        method: 'post',
        url: 'https://api.imgur.com/3/image',
        headers: { 
          'Authorization': 'Client-ID 574f96546392ad0', 
          'Accept': 'multipart/form-data',
          'Content-Type': 'multipart/form-data',
        },
        data : data
      };
      axios(config)
      .then((response) => {
        console.log('response ccc', response);
      })
      .catch((error) => {
        console.log('error ccc', error);
      });
    
  }

  return (
    <div className="story-form">
      <Form
        layout={'vertical'}
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
          <TextArea rows={12} placeholder="Nội dung" />
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
        <input type="file" onChange={(e)=>fileUpload(e.target.files)}/>
        <button onClick={uploadImage}>click</button>
      </Form>
    </div>
  )
}

function stateSelector(state) {
  return {
    loading: state.story.loading,
    story: state.story.story
  }
}