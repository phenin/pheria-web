import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import user from './userReducer'
import story from './storyReducer'
import listStory from './listStoryReducer'
import template from './templateReducer'
import groupTemplate from './groupTemplateReducer'
import background from './backgroundReducer'


const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user,
  story,
  listStory,
  template,
  groupTemplate,
  background
})

export default createRootReducer
