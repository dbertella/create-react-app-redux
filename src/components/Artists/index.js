import React, { PropTypes } from 'react';
import ArtistCard from '../ArtistCard';
const renderList = (artistList) =>
  artistList.map((artist, i) => <ArtistCard info={artist} key={i} />);

const Artists = (props) => {
  const { artistList } = props;
  return (
    <div>
      {
        artistList.length > 0 && renderList(artistList)
      }
    </div>
  );
};

Artists.propTypes = {
  artistList: PropTypes.array.isRequired,
}

export default Artists;
