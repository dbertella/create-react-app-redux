import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const stubFunc = () => 'app';
  ReactDOM.render(<App artistList={[]} pushArtist={stubFunc} />, div);
});
