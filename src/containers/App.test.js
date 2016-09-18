import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { App } from './App';

const store = createStore(() => ({}));
const artists = {
  data: [],
  filtered: [],
};
const sortParam = {
  age: 'ASC',
  rate: 'DESC',
};
const stubFunc = () => 'app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App
        artists={artists}
        pushArtist={stubFunc}
        sortArtist={stubFunc}
        sortParam={sortParam}
      />
    </Provider>,
    div
  );
});
