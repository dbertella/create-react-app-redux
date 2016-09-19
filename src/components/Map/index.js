import React, { PropTypes } from 'react';
import { Gmaps, Marker, InfoWindow } from 'react-gmaps';


const renderList = artistList => artistList.map((artist, i) => (
  <Marker
    key={i}
    lat={artist.latitude}
    lng={artist.longitude}
  />
));
const renderInfo = artistList => artistList.map((artist, i) => (
  <InfoWindow
    key={i}
    lat={artist.latitude}
    lng={artist.longitude}
    content={`${artist.age} ${artist.rate} ${artist.gender}`}
  />
));


const median = (artistList, param) => {
  const values = artistList.map(el => el[param]);
  values.sort((a, b) => a - b);

  const half = Math.floor(values.length / 2);

  if (values.length % 2) {
    return values[half];
  }
  return (values[half - 1] + values[half]) / 2.0;
};

const Artists = (props) => {
  const { artistList } = props;
  return (
    <Gmaps
      width={'100%'}
      height={500}
      lat={median(artistList, 'latitude')}
      lng={median(artistList, 'longitude')}
      zoom={12}
      loadingMessage={'Loading'}
      params={{ v: '3.exp', key: 'AIzaSyBNQdGe3AYv7nAWXTrsIwoiNFjW1coBTAc' }}
    >
    {
      artistList.length > 0 && renderList(artistList)
    }
    {
      // artistList.length > 0 && renderInfo(artistList)
    }
    </Gmaps>
  );
};

Artists.propTypes = {
  artistList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Artists;
