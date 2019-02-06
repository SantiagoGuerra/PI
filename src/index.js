import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import {Provider} from 'react-redux'
import store from './store'

import {ThemeProvider} from 'styled-components'
import theme from './styled.theme'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>, document.getElementById('root'));

serviceWorker.register();
