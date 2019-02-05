import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.normalFontSize};
`

const StyledInputNumber = styled.input.attrs({
  type: 'number',
  placeholder: 'Example: 56'
})`
  flex-grow: 1;
  height: 40px;
  padding-left: 24px;
  border-radius: 20px 0px 0px 20px;
  border: 2px solid ${props => props.theme.mainColor};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.normalFontSize};
  color: ${props => props.theme.darkColor};

  ::placeholder {
    color: ${props => props.theme.lightColor};
  }

  &:focus {
    outline: none;
  }
`

const StyledInputSubmit = styled.input.attrs({
  type: 'submit',
  value: 'Go!'
})`
  width: 60px;
  height: 40px;
  padding-left: 24px;
  border-radius: 0px 20px 20px 0px;
  border: 2px solid ${props => props.theme.mainColor};
  color: ${props => props.theme.mainColor};
  display: flex;
  justify-content: center;
  background: #FFF;
  text-align: center;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.normalFontSize};
  padding: 0;

  &:hover {
    background: ${props => props.theme.mainColor};
    color: #FFF;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0,0,0,.3);
  }

  &:focus {
    outline: none;
  }
`

const Form = () => (
  <StyledForm>
    <StyledInputNumber/>
    <StyledInputSubmit/>
  </StyledForm>
)

export default Form