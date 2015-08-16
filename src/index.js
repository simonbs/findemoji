import 'babel/polyfill';

import React from 'react';
import App from './components/App';
import BrowserHistory from 'react-router/lib/BrowserHistory';

React.render(<App history={new BrowserHistory()} />, document.body);
