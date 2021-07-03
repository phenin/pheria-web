import React from 'react'
import { GoogleLogin } from 'react-google-login';
import {
  GoogleOutlined
} from '@ant-design/icons';

export default function Google() {

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div>
      <GoogleLogin
        clientId="203446964330-c908139qohqo2g5ga16g0sf19foigc9p.apps.googleusercontent.com"
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