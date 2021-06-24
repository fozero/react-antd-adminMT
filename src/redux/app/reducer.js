
import {  handleActions } from 'redux-actions';


import {GET_CONTRACT_LIST_REQUEST,GET_CONTRACT_LIST_SUCCEEDED} from './actions'

const INITIAL_STATE = {
  words:[]
}

export const appReducer = handleActions(
  {
    [GET_CONTRACT_LIST_REQUEST]: (
      state
    ) => {
      return { ...state};
    },
    [GET_CONTRACT_LIST_SUCCEEDED]:(state,action)=>{
      return {
        ...state,
        words: action.payload.top_search.words
      }
    }
  },
  INITIAL_STATE
);



