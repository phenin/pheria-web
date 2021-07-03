import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";
import 'css/home.scss'

export default function SmallNav({isShowNav}) {
  const { t } = useTranslation('common')
  return (
    <div>
      {
        isShowNav && (
        <div className="nav">
          <ul className="nav_main">
            <li> <Link className="nav_link" to="/">{t('home')}</Link></li>
            <li> <Link className="nav_link" to="/about-us" >{t('about-us')}</Link></li>
          </ul>
          <div className="nav_divider"></div>
          <ul className="nav_sub">
            <li><Link className="nav_link" to="/sign-in" >{t('sign-in')}</Link></li>
          </ul>
        </div>
      )
      }
      
    </div>
  )
}