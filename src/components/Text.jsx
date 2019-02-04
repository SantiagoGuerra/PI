import React from 'react'
import styled from 'styled-components'

const StyledText = styled.p`
  color: ${props => props.theme.darkColor};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.largeFontSize};
  text-align: center;

  @media screen and (min-width: 760px) {
    font-size: ${props => props.theme.extraLargeFontSize}
  }

  ${props => {
    if(props.large) {
      return `
        color: ${props.theme.darkColor};
        font-family: ${props.theme.fontFamily};
        font-size: ${props.theme.extraLargeFontSize};

        @media screen and (min-width: 760px) {
          font-size: ${props.theme.superLargeFontSize}
        }
      `
    }
  }}
` 

const Text = ({large, children}) => (
  <StyledText large={large}>
    {children}
  </StyledText>
)


export default Text