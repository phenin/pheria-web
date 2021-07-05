import React, { useState } from 'react'
import 'css/menu-mobile.scss'
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

export default function MenuMobile() {

  return (
    <div className="menu">
      <div class="navbar">
        <HomeOutlined />
        <SettingFilled />

        <div class="circle">
          <i class="fas fa-plus plus-icon"></i>
          <i class="fab fa-youtube social"></i>
          <i class="fab fa-twitter social"></i>
          <i class="fab fa-github  social"></i>
        </div>
        <div class="circleBackground"></div>
      </div>
    </div>
    
  )
}