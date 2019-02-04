import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import theme from '../styled.theme'
import {ThemeProvider} from 'styled-components'

import Logo from '../components/Logo'
import Text from '../components/Text'


storiesOf('Components', module)
  .add('Logo', () => (
    <ThemeProvider theme={theme}>
      <Logo/>
    </ThemeProvider>
  ))
  .add('Large Text', () => (
    <ThemeProvider theme={theme}>
      <Text large='true'>
      Find interesting things about your favorite number
      </Text>
    </ThemeProvider>
  ))
  .add('Text', () => (
    <ThemeProvider theme={theme}>
      <Text>
      Find interesting things about your favorite number
      </Text>
    </ThemeProvider>
  ))