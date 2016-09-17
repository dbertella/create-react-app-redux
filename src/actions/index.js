export const FILTER_ARTISTS = 'FILTER_ARTISTS';
export const PUSH_ARTISTS = 'PUSH_ARTISTS';

export const pushArtistList = (json) => ({
  type: PUSH_ARTISTS,
  json,
});
const artistFiltered = (filtered) => ({
  type: FILTER_ARTISTS,
  filtered,
});

export const filterArtistsList = (data) => (dispatch, getState) => {
  let filteredState = getState().artists.data;
  if (data.ageMin || data.ageMax) {
    const min = data.ageMin || 0;
    const max = data.ageMax || 99;
    filteredState = filteredState.filter(artist =>
      artist.age > min && artist.age < max
    );
  }
  if (data.rateMin || data.rateMax) {
    const min = data.rateMin || 0;
    const max = data.rateMax || 99;
    filteredState = filteredState.filter(artist =>
      artist.rate > min && artist.rate < max
    );
  }
  if (data.gender) {
    filteredState = filteredState.filter(artist => artist.gender === data.gender);
  }
  if (filteredState.length === 0) {
    console.log('No Match for the filter');
  }
  return dispatch(artistFiltered(filteredState));
}

export const orderArtistsList = (query) => (dispatch, getState) => {
  const artistList = getState().artists.data;
  const filtered = artistList.filter(el => el[query.field] === query.value);
  return dispatch({
    type: FILTER_ARTISTS,
    filtered,
  });
}
