import { combineReducers } from 'redux'
import items from './items'
import ui from './ui'

export default combineReducers({
  items,
  ui
})