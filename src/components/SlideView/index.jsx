import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

export default function SlideView({ setIsOpen }) {
  return (
    <>
      <div className="background" onClick={() => setIsOpen(false)} />
      <div className="right">
        <div className="side-modal">
          <div className="header-mod">
            <h5 className="heading">New Company_Profile</h5>
          </div>
          <div className="box-content">Name</div>
          <input type="text" className="modal-input" />

          <div className="box-actions">
            <div className="actions-container">
              <button className="cancel" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
              <button
                className="create-button"
                onClick={() => setIsOpen(false)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

SlideView.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
