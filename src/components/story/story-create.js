import React, { useEffect, useState } from 'react'
import StoryFrom from "./story-form"
import StoryTemplate from "./story-template"
import StoryHeader from "./story-header"
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import 'css/story-create.scss'
import { setStory } from "store/actions/storyActions"

export default function StoryCreate() {  
  const state = useSelector(stateSelector, shallowEqual)
  const [backgroundColor, setBackgroundColor] = useState(null)
  const dispatch = useDispatch()

  const { template } = state

  useEffect(()=>{
    if( template && template.backgroundColor && template.backgroundColor.length > 2 ) {
      let listColor = ''
      template.backgroundColor.forEach(color => {
        listColor = listColor + "#" + color + ", "
      })
      setBackgroundColor(`radial-gradient(${listColor})`)
    }
    else if ( template && template.backgroundColor.length === 1 ){
      setBackgroundColor(`#${template.backgroundColor[0]}`)
    }

    dispatch(setStory(null))

  }, [template, setBackgroundColor, dispatch, setStory])

  return (
    <div className="story-create" 
      style={{
        backgroundColor: backgroundColor,
        color: (template && template.color) ? `#${template.color}` : '#fff',
        backgroundImage: `url(${template && template.image[0].url})`
      }}
    >
      <StoryHeader title="Bạn có tâm sự gì?"/>
      <StoryTemplate />
      <StoryFrom template={template && template._id} type={template && template.type} 
        imageTemplate={template && template.image.length > 0 && template.image[0]}/>
      
    </div>
  )
}

function stateSelector(state) {
  return {
    template: state.template.template,
  }
}