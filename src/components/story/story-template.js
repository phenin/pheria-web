import React, { useEffect } from 'react'
import { getListTemplate, setTemplate } from 'store/actions/templateActions'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { LoadingOutlined } from '@ant-design/icons'
export default function StoryTemplate() {

  const state = useSelector(stateSelector, shallowEqual)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getListTemplate({group:'depression'}))
  },[dispatch, getListTemplate])

  const selectTemplate = (value) =>{
    dispatch(setTemplate(value))
  }

  return (
    <div className="story-template">
      {
        state.loading ? <LoadingOutlined /> :
        state.listTemplate.map((item, index) => {
          return (
            <div className="story-template-item" key={index} onClick={()=>selectTemplate(item)}>
              {item.name}
            </div>
          )
        })
      }
    </div>
  )
}

function stateSelector(state) {
  return {
    listTemplate: state.template.listTemplate,
    loading: state.template.loading
  }
}