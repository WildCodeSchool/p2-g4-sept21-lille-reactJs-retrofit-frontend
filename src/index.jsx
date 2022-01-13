import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
/* import axios from 'axios'; */
import App from './App';
import GlobalStyle from './GlobaleStyle';
import globalReducer from './Reducer/globalReducer';

const store = createStore(globalReducer);
/* axios.defaults.baseURL = process.env.REACT_APP_BASE_URL; */

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
