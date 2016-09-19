import React, { PropTypes } from 'react';
import ArtistCard from '../ArtistCard';

const renderList = artistList =>
  artistList.map((artist, i) => <ArtistCard info={artist} key={i} />);

const Artists = (props) => {
  const { artistList } = props;
  return (
    <div>
      <div>Total record: <strong>{artistList.length}</strong></div>
      {
        artistList.length > 0 && renderList(artistList)
      }
    </div>
  );
};

Artists.propTypes = {
  artistList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Artists;
