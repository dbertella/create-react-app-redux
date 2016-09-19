import { reset } from 'redux-form';

export const FILTER_ARTISTS = 'FILTER_ARTISTS';
export const PUSH_ARTISTS = 'PUSH_ARTISTS';
export const SORT_ARTISTS = 'SORT_ARTISTS';

export const pushArtistList = json => ({
  type: PUSH_ARTISTS,
  json,
});
const artistFiltered = filtered => ({
  type: FILTER_ARTISTS,
  filtered,
});

export const filterArtistsList = data => (dispatch, getState) => {
  let filteredState = getState().artists.data;
  if (data.ageMin || data.ageMax) {
    const min = data.ageMin || 0;
    const max = data.ageMax || 99;
    filteredState = filteredState.filter(artist =>
      artist.age >= min && artist.age <= max
    );
  }
  if (data.rateMin || data.rateMax) {
    const min = data.rateMin || 0;
    const max = data.rateMax || 99;
    filteredState = filteredState.filter(artist =>
      artist.rate >= min && artist.rate <= max
    );
  }
  if (data.gender) {
    filteredState = filteredState.filter(artist => artist.gender === data.gender);
  }
  if (filteredState.length === 0) {
    console.warn(new Error('No match for added filter'));
    dispatch(reset('filterArtist'));
  }
  return dispatch(artistFiltered(filteredState));
};

export const sortArtistList = (param, sortType) => (dispatch, getState) => {
  const artists = getState().artists;
  const artistList = artists.data;
  const artistListFiltered = artists.filtered;

  const sortArtist = (prev, next) => {
    if (prev[param] > next[param]) {
      return 1;
    }
    if (prev[param] < next[param]) {
      return -1;
    }
    return 0;
  };
  const sorted = artistList.slice().sort(sortArtist);
  const sortedFiltered = artistListFiltered.slice().sort(sortArtist);
  return dispatch({
    type: SORT_ARTISTS,
    sorted: sortType === 'ASC' ? sorted : sorted.slice().reverse(),
    sortedFiltered: sortType === 'ASC' ? sortedFiltered : sortedFiltered.slice().reverse(),
    param,
    sortType,
  });
};
