import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import SubmitNumber from './SubmitNumber'
import Message from './Message';

const StyledMain = styled.main`
  background: red;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const Main = () => (
  <StyledMain>
    <Header/>
    <SubmitNumber />
    <Message>This is a message</Message>
  </StyledMain>
)

export default Main