import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const artistList = [{
  uuid: '1',
  gender: 'F',
  age: 39,
  longitude: '-0.09998975',
  rate: 14.21,
  latitude: '51.75436293',
}, {
  uuid: '2',
  gender: 'M',
  age: 16,
  longitude: '0.18228006',
  rate: 22.5,
  latitude: '51.74640997',
}, {
  uuid: '3',
  gender: 'M',
  age: 66,
  longitude: '0.18228006',
  rate: 39.5,
  latitude: '51.74640997',
}];

describe('Action creators', () => {
  it('should return the first record if filtered for gender: "F"', () => {
    const expectedActions = [
      { type: actions.FILTER_ARTISTS, filtered: [artistList[0]] },
    ];
    const store = mockStore({ artists: { data: artistList, filtered: [] } });
    store.dispatch(actions.filterArtistsList({ gender: 'F' }));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('should return first two record if filtered for ageMin: 16 and ageMax: 39', () => {
    const expectedActions = [
      { type: actions.FILTER_ARTISTS, filtered: [artistList[0], artistList[1]] },
    ];
    const store = mockStore({ artists: { data: artistList, filtered: [] } });
    store.dispatch(actions.filterArtistsList({ ageMin: 16, ageMax: 39 }));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('should return last record if filtered for gender: "M" and rateMin: 23', () => {
    const expectedActions = [
      { type: actions.FILTER_ARTISTS, filtered: [artistList[2]] },
    ];
    const store = mockStore({ artists: { data: artistList, filtered: [] } });
    store.dispatch(actions.filterArtistsList({ gender: 'M', rateMin: 23 }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should return last record if filtered for gender: "M" and rateMin: 23', () => {
    const expectedActions = [
      {
        type: actions.SORT_ARTISTS,
        sorted: [artistList[1], artistList[0], artistList[2]],
        sortedFiltered: [artistList[1], artistList[0]],
        param: 'age',
        sortType: 'ASC',
      },
    ];
    const store = mockStore({ artists: { data: artistList, filtered: [artistList[0], artistList[1]] } });
    store.dispatch(actions.sortArtistList('age', 'ASC'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
