import { all, takeLatest } from 'redux-saga/effects'

import {
  GET_CONTRACT_LIST_REQUEST,
} from '../actions'
import {
  getContractListSaga,
} from './appSaga'

export function* appWatcher() {
  try {
    yield all([
      takeLatest(GET_CONTRACT_LIST_REQUEST, getContractListSaga)
    ])
  } catch (err) {
    console.log(err)
  }
}
