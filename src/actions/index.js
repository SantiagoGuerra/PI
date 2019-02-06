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