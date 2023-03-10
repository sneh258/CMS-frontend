import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { makeRequest } from './../../utils/makeRequest';
import { GET_COLLECTION_DETAILS } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';

export default function ContentBuilder() {
  const [collections, setCollections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_COLLECTION_DETAILS, navigate).then((response) => {
      setCollections(response.data);
    });
  }, []);

  return (
    <div className="content-builder">
      <div className="header" onClick={()=>navigate('/dashboard')}>
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
          {collections.map((collection) => (
            <li onClick={()=>navigate(`/dashboard/collection/${collection.id}`)} key={collection.id}>{collection.name}</li>
          ))}
        </ul>
      </div>
      <div className="content-type">
        <p>CONTENT TYPE BUILDER</p>
      </div>
    </div>
  );
}
