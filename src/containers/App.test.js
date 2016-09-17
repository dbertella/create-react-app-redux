import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { App } from './App';

const store = createStore(() => ({}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  const stubFunc = () => 'app';
  ReactDOM.render(<Provider store={store}><App artistList={[]} pushArtist={stubFunc} /></Provider>, div);
});
