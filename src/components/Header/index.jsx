import PropTypes from 'prop-types';
import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header({ text }) {
  return (
    <div className="header-comp">
      <p>{text}</p>
      <div className='logout'><FontAwesomeIcon icon={ faUser}/></div>
    </div>
  );
}
Header.propTypes = {
  text: PropTypes.string.isRequired,
};
