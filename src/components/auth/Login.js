import React, { useState } from 'react'
import 'css/login.scss'
import { useTranslation } from 'react-i18next'
import Google from 'components/auth/Google';
import { Input, Button } from "antd"
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import {
  login,
  signUp
} from 'store/actions/userActions'

export default function Login() {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const history = useHistory()

  const [isSignIn, setIsSignIn] = useState(true)

  const [form, setForm] = useState({})

  const handleChangeInput = (key, event) => {
    setForm({
      ...form, 
      [key]: event.target.value
    })
  }

  const changeType = () => {
    setIsSignIn(!isSignIn)
  }

  const handleSubmit = () => {
    if(isSignIn){
      dispatch(login(form))
    }
    else{
      dispatch(signUp(form))
    }
    
    history.push('/home')
  }

  return (
    <div className="sign-in_wrap">
      <div className="sign-in">
        <h1>{t('sign-in')}</h1>
        <div className="social-container">
          <Google />
        </div>
        {
          !isSignIn && <Input 
            className="sign-in_input"
            value={form.name || ''} 
            type="name" 
            placeholder="Name" 
            onChange={(v) => handleChangeInput('name', v)}
          />
        }
        <Input 
          className="sign-in_input"
          value={form.email || ''} 
          type="email" 
          placeholder="Email" 
          onChange={(v) => handleChangeInput('email', v)}
        />
        <Input 
          className="sign-in_input"
          value={form.password || ''}
          type="password" 
          placeholder="Password"
          onChange={(v) => handleChangeInput('password', v)}
        />
        <Button 
          onClick={() => handleSubmit()}
          className="pheria-btn sign-in_input" 
          type="primary" 
          shape="round" 
          size='large'
        >
          {isSignIn ? t('sign-in') : t('sign-up')}
        </Button>
        <a 
          onClick={() => changeType()}
          className="sign-in_link" 
          href
        >
          {isSignIn ? t('sign-up') : t('sign-in')}
        </a>
      </div>
    </div>
  )
}
