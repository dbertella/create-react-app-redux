import React, { PropTypes } from 'react';

const Tr = (props) => {
  const { info } = props;
  return (
    <tr>
      {
        info.map((artistInfo, i) => <td key={i}>{artistInfo}</td>)
      }
    </tr>
  );
};

Tr.propTypes = {
  info: PropTypes.array.isRequired,
}

export default Tr;
