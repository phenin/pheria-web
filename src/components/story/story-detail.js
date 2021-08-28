import React, {useEffect} from 'react'
import 'css/story.scss'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { getDetailStory } from 'store/actions/storyActions'
import { useParams } from "react-router-dom"
import StoryHeader from "./story-header"

export default function StoryDetail() {

  const dispatch = useDispatch()
  const state = useSelector(stateSelector, shallowEqual)
  let slug  = useParams();

  useEffect(()=>{
    dispatch(getDetailStory({_id: slug.id}))
  },[dispatch, getDetailStory])

  return (
    state.story &&
    <div className='story-detail'>
      <StoryHeader title="" hasMenu={true}/>
    </div>
  )
}

function stateSelector(state) {
  return {
    story: state.story.story,
  }
}