import {createStore} from 'redux'
import mainApp from './reducers/'

const store = createStore(mainApp)

export default store