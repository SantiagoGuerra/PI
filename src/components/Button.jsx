import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: .5rem 1rem;
  background: #FFF;
  color: ${props => props.theme.mainColor};
  border-radius: ${props => props.theme.normalBorder};
  font-size: ${props => props.theme.normalFontSize};
  font-family: ${props => props.theme.fontFamily};
  border: 2px solid ${props => props.theme.mainColor};
  transition: all .3s ease-out;

  &:hover {
    background: ${props => props.theme.mainColor};
    color: #FFF;
    box-shadow: 0px 2px 4px rgba(0,0,0,.3);
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  ${props => {
    if(props.selected) {
      return `
        background: ${props.theme.mainColor};
        color: #FFF;
        box-shadow: 0px 2px 4px rgba(0,0,0,.3);
        cursor: pointer;
      `
    }
  }}
`

const Button = ({children, selected, buttonSelected, dataCategory}) => (
  <StyledButton selected={selected} onClick={ e => {
    e.preventDefault()
    buttonSelected(children.toLowerCase())
    dataCategory(children.toLowerCase())
}}>
    {children}
  </StyledButton>
)

export default Button