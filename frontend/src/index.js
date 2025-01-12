import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import './styles/reset.css';
import './styles/common.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    
      <Provider store={store}>
          <App /> 
    </Provider>
  
    </BrowserRouter>
  
);

