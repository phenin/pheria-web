import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import user from './userReducer'
import story from './storyReducer'
import template from './templateReducer'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user,
  story,
  template
})

export default createRootReducer
