import React from 'react';
import OrderBy from './';
import renderer from 'react-test-renderer';

const sortParam = {
  age: 'ASC',
  rate: 'DESC',
};
const stubFunc = () => 'app';

it('initial render', () => {
  const component = renderer.create(
    <OrderBy sortArtist={stubFunc} sortParam={sortParam} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
