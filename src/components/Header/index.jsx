import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export default function Header({ text }) {
  return (
    <div className="header-comp">
      <p>{text}</p>
    </div>
  );
}
Header.propTypes = {
  text: PropTypes.string.isRequired,
};
