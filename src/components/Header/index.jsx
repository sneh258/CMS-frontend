import PropTypes from 'prop-types';
import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Header({ text }) {
  const navigate = useNavigate();
  return (
    <div className="header-comp">
      <p>{text}</p>
      <div className='logout' onClick={()=>navigate('/login')}><FontAwesomeIcon icon={ faUser}/></div>
    </div>
  );
}
Header.propTypes = {
  text: PropTypes.string.isRequired,
};
