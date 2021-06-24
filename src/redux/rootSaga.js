


import { combineSagas } from "../utils/sagaHelpers";

import {appWatcher} from './app/saga'

export const rootSaga = combineSagas([
  appWatcher
])