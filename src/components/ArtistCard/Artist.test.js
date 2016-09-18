import React from 'react';
import Artist from './';

import { shallow } from 'enzyme';

const artist = {
    "uuid": "f853578c-fc0f-4e65-81b8-566c5dffa35a",
    "gender": "F",
    "age": 39,
    "longitude": "-0.09998975",
    "rate": 14.21,
    "latitude": "51.75436293"
};

describe("Artists Component", function() {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Artist info={artist} />);
  });
  it("should render the artist info", function() {
    expect(wrapper.find('p').length).toBe(3);
  });
  it("should not render map on load", function() {
    expect(wrapper.find('Gmaps').length).toBe(0);
  });
  it("should render the map on state cahnge", function() {
    wrapper.setState({ showLocation: true });
    expect(wrapper.find('Gmaps').length).toBe(1);
  });
  it("should change button label on state cahnge", function() {
    expect(wrapper.find('button').text()).toBe('Show Artist location');
    wrapper.setState({ showLocation: true });
    expect(wrapper.find('button').text()).toBe('Hide Artist location');
  });

});
