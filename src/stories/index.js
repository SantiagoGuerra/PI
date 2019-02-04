import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import theme from '../styled.theme'
import {ThemeProvider} from 'styled-components'

import Logo from '../components/Logo'

storiesOf('Components', module)
  .add('Logo', () => (
    <ThemeProvider theme={theme}>
      <Logo/>
    </ThemeProvider>
  ))
