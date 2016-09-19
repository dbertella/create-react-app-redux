import React from 'react';
import { shallow } from 'enzyme';

import Artists from './';


const artistList = [{
  uuid: 'f853578c-fc0f-4e65-81b8-566c5dffa35a',
  gender: 'F',
  age: 39,
  longitude: '-0.09998975',
  rate: 14.21,
  latitude: '51.75436293',
}, {
  uuid: 'fe2c3195-aeff-487a-a08f-e0bdc0ec6e9a',
  gender: 'M',
  age: 66,
  longitude: '0.18228006',
  rate: 39.5,
  latitude: '51.74640997',
}];

describe('Artists Component', () => {
  it('should render two Artist component', () => {
    const wrapper = shallow(<Artists artistList={artistList} />);
    expect(wrapper.find('Artist').length).toBe(2);
  });
});
