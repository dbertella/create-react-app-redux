import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Filters from './';

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
