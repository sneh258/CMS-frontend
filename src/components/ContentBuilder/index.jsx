import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function ContentBuilder() {
  return (
    <div className="content-builder">
      <div className="header">
        <p>CMS+</p>
      </div>
      <div className="collection-type">
        <div className="collection-name">
          <p>COLLECTION TYPES</p>
          <div className="font">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <ul className="list">
          <li>company details</li>
          <li>idv_functionality</li>
          <li>trials</li>
        </ul>
      </div>
      <div className="content-type">
        <p>CONTENT TYPE BUILDER</p>
      </div>
    </div>
  );
}
