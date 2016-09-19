import React from 'react';
import { shallow } from 'enzyme';

import Table from './';

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

describe("Table Component", () => {
  it("should render two Tr component in tbody", () => {
    const wrapper = shallow(<Table artistList={artistList} />);
    expect(wrapper.find('tbody Tr').length).toBe(2);
  });
  it("should render one Tr component in thead", () => {
    const wrapper = shallow(<Table artistList={artistList} />);
    expect(wrapper.find('thead Tr').length).toBe(1);
  });
});
