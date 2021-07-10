import React from 'react'
import 'css/menu-mobile.scss'
import {
  HomeOutlined,
  SettingFilled,
} from '@ant-design/icons';

export default function MenuMobile() {

  return (
    <div className="menu">
      <div className="navbar">
        <HomeOutlined />
        <SettingFilled />

        <div className="circle">
          <i className="fas fa-plus plus-icon"></i>
          <i className="fab fa-youtube social"></i>
          <i className="fab fa-twitter social"></i>
          <i className="fab fa-github  social"></i>
        </div>
        <div className="circleBackground"></div>
      </div>
    </div>
    
  )
}