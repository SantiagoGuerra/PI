import {createStore, applyMiddleware} from 'redux'
import mainApp from './reducers/'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const store = createStore(mainApp, applyMiddleware(thunkMiddleware, createLogger))

export default store