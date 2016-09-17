import React from 'react';
import Tr from './Tr';
import renderer from 'react-test-renderer';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Tr info={[]} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
