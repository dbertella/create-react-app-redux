import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Table from '../components/Table';

import { pushArtistList } from '../actions';
import artists from '../mock/artists.json';

import './App.css';

export class App extends Component {
  componentDidMount() {
    const { pushArtist } = this.props;
    pushArtist(artists);
  }
  renderFilters = () => {
    return (
      <div>
        Filter:
        <ul>
          <li>age range <input placeholder="min" /> <input placeholder="max" /></li>
          <li>a rate range <input placeholder="min" /> <input placeholder="max" /></li>
          <li>
            gender:
            <label><input type="radio" name="gender" value="M" onChange={console.log('m')} />M</label>
            <label><input type="radio" name="gender" value="F" onChange={console.log('f')} />F</label>
          </li>
        </ul>
      </div>
    );
  };
  render() {
    const { artistList } = this.props;
    return (
      <div className="App">
        <h1>Pop</h1>
        {this.renderFilters()}
        <Table artistList={artistList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artistList: state.artists.data,
});
const mapDispatchToProps = {
  pushArtist: pushArtistList,
};

App.propTypes = {
  artistList: PropTypes.array.isRequired,
  pushArtist: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
