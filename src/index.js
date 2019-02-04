import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<h1>Is Working</h1>, document.getElementById('root'));

serviceWorker.register();
