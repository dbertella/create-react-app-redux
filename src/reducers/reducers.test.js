import { artists } from './';

import {
  SHOW_ERROR,
  FILTER_ARTISTS,
  PUSH_ARTISTS,
  SORT_ARTISTS,
} from '../actions';

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

const artistListReversed = [{
  uuid: 'fe2c3195-aeff-487a-a08f-e0bdc0ec6e9a',
  gender: 'M',
  age: 66,
  longitude: '0.18228006',
  rate: 39.5,
  latitude: '51.74640997',
}, {
  uuid: 'f853578c-fc0f-4e65-81b8-566c5dffa35a',
  gender: 'F',
  age: 39,
  longitude: '-0.09998975',
  rate: 14.21,
  latitude: '51.75436293',
}];

describe('Artists Reducer', () => {
  it('should return the initial state', () => {
    expect(
      artists(undefined, {})
    ).toEqual({
      data: [],
      filtered: [],
    });
  });
  it('should set the artists list', () => {
    expect(
      artists({}, {
        type: PUSH_ARTISTS,
        json: {
          artists: artistList,
        },
      }).data.length === 2
    ).toBeTruthy();
  });
  it('should show 1 element in filtered list', () => {
    expect(
      artists({
        data: artistList,
        filtered: [],
      }, {
        type: FILTER_ARTISTS,
        filtered: [artistList[0]],
      }).filtered.length === 1
    ).toBeTruthy();
  });
  it('should show 1 element in filtered list', () => {
    expect(
      artists({
        data: artistList,
        filtered: artistList,
      }, {
        type: SORT_ARTISTS,
        sorted: artistList.slice().reverse(),
        sortedFiltered: artistList.slice().reverse(),
        param: 'age',
        sortType: 'DESC',
      })
    ).toEqual({
      data: artistListReversed,
      filtered: artistListReversed,
    });
  });
});
