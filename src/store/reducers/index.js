import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import user from './userReducer'
import story from './storyReducer'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user,
  story
})

export default createRootReducer
