import {combineReducers} from 'redux'

import errorMessage from './error-message'
import posts from './posts'
import replies from './replies'
import waiting from './waiting'
import justLoggedIn from './justLoggedIn'

export default combineReducers({
  errorMessage,
  posts,
  replies,
  waiting,
  justLoggedIn
})
