import React, { PropTypes } from 'react';

const Tr = (props) => {
  const { info } = props;
  return (
    <tr>
      {
        info.map((text, i) => <td key={i}>{text}</td>)
      }
    </tr>
  );
};

Tr.propTypes = {
  info: PropTypes.array.isRequired,
};

export default Tr;
