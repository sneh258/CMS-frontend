import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export default function AddNewField() {
  return (
    <div className="add-new-field">
      <div className="logo">
        <p>AB</p>
      </div>
      <div className="field">
        <p>Name</p>
      </div>
      <div className="type">
        <p>Text</p>
      </div>
      <div className="icon">
        <div id='icon-one'>
          <FontAwesomeIcon icon={faTrash} />
        </div>
        <div id='icon-two'>
          <FontAwesomeIcon icon={faEdit} />
        </div>
      </div>
    </div>
  );
}