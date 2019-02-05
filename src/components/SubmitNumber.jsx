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
`

const ButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  justify-content: space-evenly;
  width: 90%;
` 

const SubmitNumber = () => (
  <StyledSubmitNumber>
    <ButtonsContainer>
      <Button>
        Trivia
      </Button>
      <Button>
        Year
      </Button>
      <Button>
        Date
      </Button>
      <Button>
        Math
      </Button>
    </ButtonsContainer>
    <Form/>
  </StyledSubmitNumber>
)

export default SubmitNumber