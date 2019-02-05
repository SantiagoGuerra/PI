import React from 'react'
import styled from 'styled-components'
import Text from './Text';

const StyledMessage = styled.div`
  position: relative;
  &::before {
    content: ' ';
    position: absolute;
    background: ${props => props.theme.mainColor};
    height: 3px; 
    border-radius: 1.5px;
    width: 200px;
    left: 0;
    transition: all 800ms cubic-bezier(.7,-0.72,.34,1.81);
  }

  &::after {
    content: ' ';
    position: absolute;
    background: ${props => props.theme.mainColor};
    height: 3px; 
    border-radius: 1.5px;
    width: 200px;
    right: 0;
    transition: all 800ms cubic-bezier(.34,1.81,.34,1.81) 800ms;
  }

  &:hover::before {
    left: 50%;
  }

  &:hover::after {
    right: 50%;
  }
`

const TextContainer = styled.div`
  padding: 32px; 
`

const Message = ({children}) => (
  <StyledMessage>
    <TextContainer>
      <Text>
        {children}
      </Text>
    </TextContainer>
  </StyledMessage>
)

export default Message