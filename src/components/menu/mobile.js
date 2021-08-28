import React, { useState, useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";

import 'css/menu-mobile.scss'

import {
  HomeOutlined,
  SettingFilled,
  PlusOutlined
} from '@ant-design/icons';

export default function MenuMobile() {

  const [active, setActive] = useState('/')
  let location = useLocation();

  useEffect(()=>{
    setActive(location.pathname)

  }, [])

  return (
    <div className="menu">
      <div className={active === '/' ? 'nav-item active' : 'nav-item'}>
        <Link to="/">
          <HomeOutlined style={{color: active === '/' ? '#fff' : '#000'}}/>
          <b>Home</b>
        </Link>
      </div>
      <div className={active === '/create' ? 'nav-item active' : 'nav-item'}>
        <Link to="/">
          <PlusOutlined style={{color: active === '/create' ? '#fff' : '#000'}}/>
          <b>Create</b>
        </Link>
      </div>
      <div className={active === '/user' ? 'nav-item active' : 'nav-item'}>
        <Link to="/user">
          <SettingFilled style={{color: active === '/user' ? '#fff' : '#000'}}/>
          <b>User</b>
        </Link>
        <span></span>
      </div>
    </div>
    
  )
}