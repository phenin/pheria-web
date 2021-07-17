import React, {useEffect} from 'react'
import 'css/story.scss'
import NovelOneBanner from 'components/template/novel/novel-one-banner'
import NovelMultiBanner from 'components/template/novel/novel-multi-banner'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { getDetailStory } from 'store/actions/storyActions'
import { useParams } from "react-router-dom";
import StoryHeader from "./story-header"
import RainBorrowCloud from 'components/topping/rain/borrow-cloud'

export default function StoryDetail() {

  const dispatch = useDispatch()
  const state = useSelector(stateSelector, shallowEqual)
  let slug  = useParams();

  useEffect(()=>{
    dispatch(getDetailStory({_id: slug.id}))
  },[dispatch, getDetailStory])

  const type = state.story && state.story.type

  let Component
  switch (type) {
    case 'novel-one-banner':
      Component = NovelOneBanner
      break;
    case 'novel-multi-banner':
      Component = NovelMultiBanner
      break;
    default:
      break;
  }

  return (
    state.story &&
    <div className='story-detail'>
      <StoryHeader title="" hasMenu={true}/>
      <Component data={state.story}/>
      <RainBorrowCloud />
    </div>
  )
}

function stateSelector(state) {
  return {
    story: state.story.story,
  }
}