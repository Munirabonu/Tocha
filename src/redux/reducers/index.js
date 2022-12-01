import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import { combineReducers } from "redux"

import login_reducer from './login_reducer';



const loginPersistConfig = {
  key: "login",
  storage,
}

const rootReducer = combineReducers({
  login: persistReducer(loginPersistConfig, login_reducer),

})

export default rootReducer