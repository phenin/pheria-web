import React from 'react'
import { Link } from "react-router-dom";

import 'css/menu-mobile.scss'

import {
  HomeOutlined,
  SettingFilled,
  PlusOutlined
} from '@ant-design/icons';

export default function MenuMobile() {

  return (
    <div className="menu">
      <div className="navbar">
        <HomeOutlined />
        <SettingFilled />

        <div className="circle">
          <Link className="book home-page" to="/story-create"><PlusOutlined /></Link>
        </div>
        <div className="circleBackground"></div>
      </div>
    </div>
    
  )
}