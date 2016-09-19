import React, { PropTypes } from 'react';

const OrderBy = ({ sortArtist, sortParam }) => (
  <div>
    OrderBy:
    <button onClick={() => sortArtist('age', sortParam.age)}>Order per Age {sortParam.age}</button>
    <button onClick={() => sortArtist('rate', sortParam.rate)}>Order per Rate {sortParam.rate}</button>
  </div>
);

OrderBy.propTypes = {
  sortArtist: PropTypes.func.isRequired,
  sortParam: PropTypes.object.isRequired,
};

export default OrderBy;
