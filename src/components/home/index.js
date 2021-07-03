import React, { useState } from 'react'
import SmallNav from "components/home/SmallNav"
import Students from "components/home/Students"
import 'css/home.scss'

export default function Home() {

  const [isShowNav, setIsShowNav] = useState(false)
  const [isShowStudents, setIsShowStudents] = useState(false)

  const showStudent = () => {
    setIsShowStudents(true)
  }
  const toggleNav = () => {
    setIsShowNav(!isShowNav)
  }
  const hideStudent = () => {
    setIsShowStudents(false)
  }

  return (
    <div>
      <div className="home" >
        <div className="wrapper" >
          <div className="wave-container">
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
          {
            !isShowStudents && ( <div className="text-wrap" onClick={showStudent} >
              <div className="text" >
                <span>P</span><span>H</span><span>E</span><span>N</span><span>I</span><span>N</span>
              </div>
            </div>)
          }
          
          <div className="header">
            <div className="burger-wrapper" onClick={toggleNav}>
              <div className="burger"></div>
            </div>
            <div className="logo-text"><img src={'/phenin.svg'} width={'50'} height={'50'} alt=""/></div>
          </div>
          <SmallNav isShowNav={isShowNav} />
          <Students isShowStudents={isShowStudents} back={hideStudent}/>
        </div>
      </div>
    </div>
  )
}