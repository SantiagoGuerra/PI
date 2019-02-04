import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Text from './Text'

const StyledHeader = styled.header`
  max-width: 432px;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
`

const Header = () => (
  <StyledHeader>
    <Logo/>
    <Text large='true'>
    Find interesting things about your favorite number
    </Text>
  </StyledHeader>
)

export default Header