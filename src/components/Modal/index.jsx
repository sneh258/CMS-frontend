import React, { useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';

export default function Modal({
  setIsOpen,
  modalOptions,
  setModalOptions,
}) {
  const [inputHeading, setInputHeading] = useState('');
  const [typeHeading, setTypeHeading] = useState('');
  return (
    <>
      <div className="background" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div
          className={`modal ${modalOptions.typeHeading ? 'modal-height' : ''}`}
        >
          <div className="header-mod">
            <h5 className="heading">{modalOptions.heading}</h5>
          </div>
          <div className="box-content">{modalOptions.inputHeading}</div>
          <input
            type="text"
            className="modal-input"
            value={inputHeading}
            onChange={(e) => setInputHeading(e.target.value)}
          />
          {modalOptions.typeHeading && (
            <>
              <div className="box-content">{modalOptions.typeHeading}</div>
              <input
                type="text"
                className="modal-input"
                value={typeHeading}
                onChange={(e) => setTypeHeading(e.target.value)}
              />
            </>
          )}
          <div className="box-actions">
            <div className="actions-container">
              <button
                className="cancel"
                onClick={() => {
                  setIsOpen(false);
                  setModalOptions({});
                }}
              >
                Cancel
              </button>
              <button
                className="create-button"
                onClick={() => {
                  // addContentTypeHandler(inputHeading);
                  setIsOpen(false);
                  setModalOptions({});
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  modalOptions: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    inputHeading: PropTypes.string.isRequired,
    typeHeading: PropTypes.string,
  }).isRequired,
  setModalOptions: PropTypes.func.isRequired,
};
