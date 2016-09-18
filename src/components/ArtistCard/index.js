import React, { PropTypes } from 'react';
import { Gmaps, Marker } from 'react-gmaps';

const card = {
  position: 'relative',
  border: '1px solid #c3c3c3',
  borderRadius: 2,
  float: 'left',
  width: 300,
  height: 300,
  margin: '1em',
  padding: '1em',
};

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLocation: false,
    };
  }
  toggleShow = () => {
    const { showLocation } = this.state;
    this.setState({
      showLocation: !showLocation,
    });
  }
  render() {
    const { info } = this.props;
    const { showLocation } = this.state;
    return (
      <div style={card}>
        <p>Artist age: {info.age}</p>
        <p>Artist rate: {info.rate}</p>
        <p>Artist gender: {info.gender}</p>
        <div>
          <button onClick={this.toggleShow} style={{ margin: 0, marginBottom: 10 }}>
            {showLocation ? 'Hide' : 'Show'} Artist location
          </button>
          {
            showLocation &&
              <Gmaps
                width={'100%'}
                height={150}
                lat={info.latitude}
                lng={info.longitude}
                zoom={12}
                loadingMessage={'Loading'}
                params={{ v: '3.exp', key: 'AIzaSyBNQdGe3AYv7nAWXTrsIwoiNFjW1coBTAc' }}
              >
                <Marker
                  lat={info.latitude}
                  lng={info.longitude}
                />
              </Gmaps>
          }
        </div>
      </div>
    );
  }
}

Artist.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Artist;
