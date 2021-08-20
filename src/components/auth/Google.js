import React from 'react'
import { GoogleLogin } from 'react-google-login';
import {
  GoogleOutlined
} from '@ant-design/icons';
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import {
  loginByGG
} from 'store/actions/userActions'

export default function Google() {
  const dispatch = useDispatch()
  const history = useHistory()

  const responseGoogle = (response) => {
    dispatch(loginByGG({token: response.tokenId}))
    history.push('/home')
  }

  return (
    <div>
      <GoogleLogin
        clientId="279484816241-tt5n888b74m6kulj3i97bmfo3c0d9n10.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        buttonText={""}
        icon={false}
        >
          <GoogleOutlined />
      </GoogleLogin>
    </div>
  )
}
//mD2_HRo9YP25zYcNuUrAXvzo