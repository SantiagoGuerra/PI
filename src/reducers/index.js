import {combineReducers} from 'redux'

const initialState = {
  ui: {
    buttons: [
      {name: 'trivia', isOpen: true},
      {name: 'year', isOpen: false},
      {name: 'date', isOpen: false},
      {name: 'math', isOpen: false},      
    ]
  }
}

const ui = (state = initialState.ui, action) => {

  switch(action.type) {
    case 'BUTTON_SELECTED':
      console.log('dodksjosdfj')
      return Object.assign({}, state, {buttons: action.payload})
    default:
      return state 
  }
}

const mainApp = combineReducers({
  ui
})

export default mainApp