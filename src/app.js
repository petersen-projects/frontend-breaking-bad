import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import './styles/styles.scss';

import configureStore from './store/configureStore';
import CharacterPage from './components/CharacterPage';

const store = configureStore();

ReactDOM.render(
   <div>
      <Provider store={store}>
         <CharacterPage />
      </Provider>
   </div>
   ,document.getElementById('app')
);
