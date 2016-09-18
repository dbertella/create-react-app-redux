import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Table from '../components/Table/';
import Filters from '../components/Filters/';
import OrderBy from '../components/OrderBy/';

import { pushArtistList, filterArtistsList, sortArtistList } from '../actions';
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
    const { artists, sortArtist, sortParam } = this.props;
    return (
      <div className="App">
        <h1>Pop Test</h1>
        <Filters onSubmit={this.filterArtists} />
        <OrderBy sortArtist={sortArtist} sortParam={sortParam} />
        <Table artistList={artists.filtered.length > 0 ? artists.filtered : artists.data} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artists: state.artists,
  sortParam: state.sortParam,
});
const mapDispatchToProps = {
  pushArtist: pushArtistList,
  filterArtists: filterArtistsList,
  sortArtist: sortArtistList,
};

App.propTypes = {
  artists: PropTypes.object.isRequired,
  pushArtist: PropTypes.func.isRequired,
  sortArtist: PropTypes.func.isRequired,
  sortParam: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
