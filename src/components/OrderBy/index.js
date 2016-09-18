import React, { PropTypes } from 'react';

const OrderBy = ({ sortArtist, sortParam }) => (
  <div>
    OrderBy:
    <button onClick={() => sortArtist('age', sortParam.age)}>Age {sortParam.age}</button>
    <button onClick={() => sortArtist('rate', sortParam.rate)}>Rate {sortParam.rate}</button>
  </div>
);

OrderBy.propTypes = {
  sortArtist: PropTypes.func.isRequired,
  sortParam: PropTypes.object.isRequired,
};

export default OrderBy;
