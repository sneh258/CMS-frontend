import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function AddNewType({data}) {
  return <div className='add-new-type'><p>{data}</p></div>;
}

AddNewType.propTypes = {
  data: PropTypes.array.isRequired,
};