import React from 'react';
import Filters from './';
import renderer from 'react-test-renderer';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(() => ({}));
const stubFunc = () => 'app';

it('initial render', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Filters store={store} onSubmit={stubFunc} />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
