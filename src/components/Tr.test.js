import React from 'react';
import Tr from './Tr';

import { shallow } from 'enzyme';

const artist = {
    "uuid": "f853578c-fc0f-4e65-81b8-566c5dffa35a",
    "gender": "F",
    "age": 39,
    "longitude": "-0.09998975",
    "rate": 14.21,
    "latitude": "51.75436293"
};

describe("Tr Component", function() {
  it("should render 6 td, one per artist field", function() {
    const wrapper = shallow(<Tr info={Object.keys(artist).map(key => artist[key])} />);
    expect(wrapper.find('td').length).toBe(6);
  });
});
