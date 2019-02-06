import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import SubmitNumber from './SubmitNumber'
import Message from './Message';

const StyledMain = styled.main`
  /* background: red; */
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 62px;
`

const StyledMainItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 430px;
`

const Main = ({
  ui,
  buttonSelected,
  message,
  request,
  data,
  dataCategory,
  changeInputNumber
}) => (
  <StyledMain>
    <StyledMainItem>
      <Header/>
      <SubmitNumber buttons={ui.buttons} buttonSelected={buttonSelected} request={request} data={data} dataCategory={dataCategory} dataNumber={changeInputNumber}/>
      <Message>{message.content}</Message>
    </StyledMainItem>
  </StyledMain>
)

export default Main