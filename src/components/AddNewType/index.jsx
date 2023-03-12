import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { useNavigate } from 'react-router-dom';

export default function AddNewType({ data, id }) {
  const navigate = useNavigate();
  return <div className='add-new-type' onClick={()=>navigate(`/dashboard/content/${id}`)}><p>{data}</p></div>;
}

AddNewType.propTypes = {
  id:PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};