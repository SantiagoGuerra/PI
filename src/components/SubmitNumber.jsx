import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Form from './Form'

const StyledSubmitNumber = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  align-items: center;
  margin-top: 48px;
  width: 100%;
`

const ButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  justify-content: space-evenly;
  width: 90%;
` 

const SubmitNumber = ({buttons, buttonSelected, request, data, dataCategory, dataNumber}) => (
  <StyledSubmitNumber>
    <ButtonsContainer>
      <Button selected={buttons[0].isOpen} buttonSelected={buttonSelected} dataCategory={dataCategory}>
        Trivia
      </Button>
      <Button selected={buttons[1].isOpen} buttonSelected={buttonSelected} dataCategory={dataCategory}>
        Year
      </Button>
      <Button selected={buttons[2].isOpen} buttonSelected={buttonSelected} dataCategory={dataCategory}>
        Date
      </Button>
      <Button selected={buttons[3].isOpen} buttonSelected={buttonSelected} dataCategory={dataCategory}>
        Math
      </Button>
    </ButtonsContainer>
    <Form request={request} data={data} dataNumber={dataNumber}/>
  </StyledSubmitNumber>
)

export default SubmitNumber