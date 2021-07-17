import React from 'react'
import 'css/topping/rain/borrow-cloud.scss'

export default function RainBorrowCloud() {

  // const templateName = data.template.split('/')[1]

  return (
    <div className="rain-borrow-cloud">
      <img className="cloud" src='/assets/topping/rain/cloud.png' alt='cloud' />
      <div className="rain">
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
        <span className="drop"></span>
      </div>
  
    </div>
  )
}