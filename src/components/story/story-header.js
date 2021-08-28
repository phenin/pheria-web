import React from 'react'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { Menu, Dropdown } from "antd"
import 'css/story.scss'
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

export default function StoryHeader({title, hasMenu}) {

  const history = useHistory()

  const turnBack = () =>{
    history.goBack()
  }

  const menuList = (
    <Menu>
      <Menu.Item>
        <Link to="/edit" rel="noopener noreferrer" href="https://www.antgroup.com">
          Chỉnh sửa
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="story-header">
      <div className="story-header_icon" onClick={()=>turnBack()}>
        <CloseOutlined />
      </div>
      
      <h3>{title}</h3>
      {
        hasMenu && (
        <div className="story-header_icon">
          <Dropdown overlay={menuList} placement="bottomRight"
          trigger={['click']}>
            <MenuOutlined />
          </Dropdown>
          
        </div>
        )
      }
      
    </div>
  )
}