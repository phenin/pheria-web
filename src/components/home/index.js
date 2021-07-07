import React from 'react'
import Menu from 'components/menu/mobile'
import StoryList from 'components/story/story-list'
import 'css/home.scss'

export default function Home() {

  return (
    <div className="background">
      <StoryList />
      
      {/* <Menu/> */}
    </div>
  )
}