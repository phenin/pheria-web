import React, { useState } from 'react'
import 'css/login.scss'
import { useTranslation } from 'react-i18next'
import useMedia from 'hooks/useMedia';
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
  const isMobile = useMedia(['(max-width: 480px)'], [true], false);
  const dispatch = useDispatch()
  const history = useHistory()

  const [classNameRight, setClassNameRight] = useState(true)
  const toggleSignUpWindow = () => {
    setClassNameRight(!classNameRight)
  }

  const [form, setForm] = useState({})

  const handleChangeInput = (key, event) => {
    setForm({
      ...form, 
      [key]: event.target.value
    })
  }

  const handleLogin = () => {
    dispatch(login(form))
    history.push('/home')
  }

  const handleSignUp = () => {
    dispatch(signUp(form))
    history.push('/home')
  }

  return (
    <div className="sign-in_wrap">
      <div className="sign-in">
        <h1>{t('sign-in')}</h1>
        <div className="social-container">
          <Google />
        </div>
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
          onClick={() => handleLogin()}
          className="pheria-btn sign-in_input" 
          type="primary" 
          shape="round" 
          size='large'
        >
          {t('sign-in')}
        </Button>
      </div>
    </div>
  )
}
