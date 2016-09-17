// export const REQUEST_ARTISTS = 'REQUEST_ARTISTS';
export const PUSH_ARTISTS = 'PUSH_ARTISTS';

export const pushArtistList = (json) => ({
  type: PUSH_ARTISTS,
  json,
});
