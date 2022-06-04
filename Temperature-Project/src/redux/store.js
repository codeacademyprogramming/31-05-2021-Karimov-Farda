import {applyMiddleware, combineReducers, createStore} from 'redux'
import { temperatureReducer } from '../modules/temperature-app/reducer'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({temperature : temperatureReducer})

const middleware = [thunk,
]
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())