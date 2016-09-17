import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Table from '../components/Table/';
import Filters from '../components/Filters/';

import { pushArtistList, filterArtistsList } from '../actions';
import artists from '../mock/artists.json';

import './App.css';

export class App extends Component {
  componentDidMount() {
    const { pushArtist } = this.props;
    pushArtist(artists);
  }
  filterArtists = (data) => {
    const { filterArtists } = this.props;
    filterArtists(data);
  }
  removeFilter = () => {
    const { filterArtists } = this.props;
    filterArtists();
  }
  render() {
    const { artistList, artistListFiltered } = this.props;
    return (
      <div className="App">
        <h1>Pop</h1>
        <Filters onSubmit={this.filterArtists} />
        <Table artistList={artistListFiltered && artistListFiltered.length > 0 ? artistListFiltered : artistList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artistList: state.artists.data,
  artistListFiltered: state.artists.dataFiltered,
});
const mapDispatchToProps = {
  pushArtist: pushArtistList,
  filterArtists: filterArtistsList,
};

App.propTypes = {
  artistList: PropTypes.array.isRequired,
  pushArtist: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
