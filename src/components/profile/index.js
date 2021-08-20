import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";
import 'css/profile.scss'

export default function Profile() {
  const { t } = useTranslation('common')

  return (
    <div className="profile-container">
      <div className="background">
        <img alt="" src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-9/81953099_2992217947457502_523733539049439232_n.jpg?_nc_cat=104&amp;ccb=1-3&amp;_nc_sid=e3f864&amp;_nc_ohc=7lpZDbaP9t0AX-wRgsT&amp;_nc_ht=scontent-hkg4-2.xx&amp;oh=7a160780a0c4bbb2e0a659e15b3626ad&amp;oe=612BE756" />
      </div>
      <div className="info">
        <div className="avatar">
          <img alt="" src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-1/s480x480/170941312_4226004234078861_1670058917254878030_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=SgBt95meftgAX__1Rhz&_nc_ht=scontent-hkg4-1.xx&oh=d8cc3879ea45639519f8f6c80a78b0ab&oe=6128C7DD" />
        </div>
        <div className="name">
          Mai Vĩnh Thông
        </div>
      </div>
      
    </div>
  )
}