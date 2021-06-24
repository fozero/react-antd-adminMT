import { call, put } from 'redux-saga/effects'

import {
  getContractList,
} from '../../../services/contractApi'
import {
  getContractListSucceeded,
} from '../actions'

export function* getContractListSaga() {
  try {
    const { data } = yield call(
      getContractList
    )
    yield put(getContractListSucceeded(data))
  } catch (e) {
    // TODO error handle
  }
}