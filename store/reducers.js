import { combineReducers } from 'redux'
import github from './modules/github'
import auth from './modules/auth'

export default combineReducers({
    github,
    auth
})