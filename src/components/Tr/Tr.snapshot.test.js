import React from 'react';
import renderer from 'react-test-renderer';

import Tr from './';

const artist = {
    "uuid": "f853578c-fc0f-4e65-81b8-566c5dffa35a",
    "gender": "F",
    "age": 39,
    "longitude": "-0.09998975",
    "rate": 14.21,
    "latitude": "51.75436293"
};

it('initial render', () => {
  const component = renderer.create(
    <Tr info={Object.keys(artist).map(key => artist[key])} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
