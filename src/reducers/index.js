import {combineReducers} from 'redux'

const initialState = {
  ui: {
    buttons: [
      {name: 'trivia', isOpen: true},
      {name: 'year', isOpen: false},
      {name: 'date', isOpen: false},
      {name: 'math', isOpen: false},      
    ]
  },
  data: {
    number: 0,
    category: 'trivia'
  },
  message: {
    content: 'Numbers are awesome!!!'
  }
}

const ui = (state = initialState.ui, action) => {

  switch(action.type) {
    case 'BUTTON_SELECTED':
      return Object.assign({}, state, {buttons: action.payload})
    default:
      return state 
  }
}

const data = (state = initialState.data, action ) => {
  switch(action.type) {
    case 'DATA_NUMBER':
      return Object.assign({}, state, {number: action.number})
    case 'DATA_CATEGORY':
      return Object.assign({}, state, {category: action.category})
    default:
      return state
  }
}

const message = (state = initialState.message, action) => {
  switch(action.type) {
    case('RECEIVE_MESSAGE'):
      return Object.assign({}, state, {content: action.msg})
    default:
      return state
  }
}

const mainApp = combineReducers({
  ui,
  data,
  message
})

export default mainApp