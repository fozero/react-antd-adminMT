import { combineReducers } from 'redux'
import { contractReducer } from './contract/reducer'

export const rootReducer = combineReducers({
  contract: contractReducer
})
