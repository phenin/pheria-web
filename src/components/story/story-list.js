import React, { useState, useEffect } from 'react'
import { getListStory } from 'store/actions/storyActions'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import Story from "components/story/story"
import 'css/story.scss'

export default function StoryList() {

  const state = useSelector(stateSelector, shallowEqual)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getListStory())
  },[dispatch, getListStory])

  return (
    <div className="story-list">
      <div className="container">
        {
          state.listStory.map((item, index)=>{
            return  (
              <Story data={item} key={index}/> 
            )
          })
        }
      </div>
    </div>
  )
}

function stateSelector(state) {
  return {
    listStory: state.story.listStory,
  }
}