import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Artists from '../components/Artists/';
import Filters from '../components/Filters/';
import GMap from '../components/Map/';
import OrderBy from '../components/OrderBy/';
import Table from '../components/Table/';

import { changeLayout, filterArtistsList, pushArtistList, sortArtistList } from '../actions';
import artistsJson from '../mock/artists.json';

import './App.css';

export class App extends Component {
  componentDidMount() {
    const { pushArtist } = this.props;
    pushArtist(artistsJson);
  }
  filterArtists = (data) => {
    const { filterArtists } = this.props;
    filterArtists(data);
  };
  removeFilter = () => {
    const { filterArtists } = this.props;
    filterArtists();
  };
  changePage = (page) => {
    const { changePage } = this.props;
    changePage(page);
  };
  renderMain = artists => (
    artists.filtered.length > 0 ? artists.filtered : artists.data
  )
  render() {
    const { artists, error, page, sortArtist, sortParam } = this.props;
    return (
      <div className="App">
        <h1>Pop</h1>
        {
          error.message &&
            <div style={{ position: 'absolute', width: '100%', background: 'red' }}>{error.message}</div>
        }
        <Filters onSubmit={this.filterArtists} />
        <OrderBy sortArtist={sortArtist} sortParam={sortParam} />
        <button onClick={() => this.changePage('cards')}>Show cards layout</button>
        <button onClick={() => this.changePage('map')}>Show map layout</button>
        <button onClick={() => this.changePage('table')}>Show table layout</button>
        {
          page.layout === 'cards' &&
            <Artists artistList={this.renderMain(artists)} />
        }
        {
          page.layout === 'table' &&
            <Table artistList={this.renderMain(artists)} />
        }
        {
          page.layout === 'map' &&
            <GMap artistList={this.renderMain(artists)} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artists: state.artists,
  error: state.error,
  page: state.page,
  sortParam: state.sortParam,
});
const mapDispatchToProps = {
  changePage: changeLayout,
  filterArtists: filterArtistsList,
  pushArtist: pushArtistList,
  sortArtist: sortArtistList,
};

App.propTypes = {
  artists: PropTypes.object.isRequired,
  changePage: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
  filterArtists: PropTypes.func.isRequired,
  page: PropTypes.object.isRequired,
  pushArtist: PropTypes.func.isRequired,
  sortArtist: PropTypes.func.isRequired,
  sortParam: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
