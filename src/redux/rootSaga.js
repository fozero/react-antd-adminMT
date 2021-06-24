import { combineSagas } from '../utils/sagaHelpers'
import { contractWatcher } from './contract/saga'

export const rootSaga = combineSagas([contractWatcher])
