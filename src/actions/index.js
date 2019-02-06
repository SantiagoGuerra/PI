export const buttonSelectedAction = name => {

  let buttons = [
    {name: 'trivia', isOpen: true},
    {name: 'year', isOpen: false},
    {name: 'date', isOpen: false},
    {name: 'math', isOpen: false},      
  ]

  buttons.forEach(button => {
    if(button.name === name) {
      button.isOpen = true
    } else {
      button.isOpen = false
    }})


  return {
    type: 'BUTTON_SELECTED',
    payload: buttons
  }
}

export const receiveMessage = msg => ({
  type: 'RECEIVE_MESSAGE',
  msg
})

export const requestMessage = (number, type) => function (dispatch) {
  return fetch(`http://numbersapi.com/${number}/${type}`)
    .then(response => response.text())
    .then(text => dispatch(receiveMessage(text)))
    .catch(error => receiveMessage(error))
}

export const dataType = category => ({
  type: 'DATA_CATEGORY',
  category
})

export const dataNumber = number => ({
  type: 'DATA_NUMBER',
  number
})