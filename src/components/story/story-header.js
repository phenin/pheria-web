import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import 'css/story.scss'
import { useHistory } from "react-router-dom"

export default function StoryHeader({title}) {

  const history = useHistory()

  const turnBack = () =>{
    history.goBack()
  }

  return (
    <div className="story-header">
      <div className="story-header_icon" onClick={()=>turnBack()}>
        <CloseOutlined />
      </div>
      
      <h3>{title}</h3>
    </div>
  )
}