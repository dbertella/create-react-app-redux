import React, { PropTypes } from 'react';
import Tr from '../Tr';

const dataToRender = artist =>
  Object.keys(artist).sort(); // .filter(key => key !== 'longitude').filter(key => key !== 'latitude');

const renderHeading = artist => <Tr info={dataToRender(artist)} />;

const renderList = artistList => artistList.map((artist, i) =>
  <Tr key={i} info={dataToRender(artist).map(key => artist[key])} />);

const Table = (props) => {
  const { artistList } = props;
  return (
    <div>Total record: <strong>{artistList.length}</strong>
      <table>
        <thead>
          {
            artistList.length > 0 && renderHeading(artistList[0])
          }
        </thead>
        <tbody>
          {
            artistList.length > 0 && renderList(artistList)
          }
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  artistList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
