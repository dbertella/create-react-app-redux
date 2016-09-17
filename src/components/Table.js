import React, { PropTypes } from 'react';
import Tr from './Tr';

const renderHeading = (artist) => <Tr info={Object.keys(artist)} />;

const renderList = (artistList) => artistList.map((artist, i) =>
    <Tr key={i} info={Object.keys(artist).map(key => artist[key])} />);

const Table = (props) => {
  const { artistList } = props;
  return (
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
  );
};

Table.propTypes = {
  artistList: PropTypes.array.isRequired,
}

export default Table;
