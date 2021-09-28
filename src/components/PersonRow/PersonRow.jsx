import React from 'react';
import PropTypes from 'prop-types';

function PersonRow({ person }) {
  const { name, sex, born, died, motherName, fatherName } = person;

  return (
    <>
      <td>{name}</td>
      <td>{sex}</td>
      <td>{born}</td>
      <td>{died}</td>
      <td>{motherName}</td>
      <td>{fatherName}</td>
    </>
  );
}

export default PersonRow;

PersonRow.defaultProps = {
  person: PropTypes.shape({
    motherName: null,
    fatherName: null,
  }),
};

PersonRow.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    born: PropTypes.number.isRequired,
    died: PropTypes.number.isRequired,
    motherName: PropTypes.string,
    fatherName: PropTypes.string,
  }),
};
