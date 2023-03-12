/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import './index.css';
import { makeRequest } from './../../utils/makeRequest';
import {
  GET_COLLECTION_DETAILS,
  GET_DATA_OF_COLLECTION,
  GET_CONTENT_BY_ID_URL
} from '../../constants/apiEndPoints';
import { useNavigate, useParams } from 'react-router-dom';
import AddNewField from '../AddNewField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export default function Field() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState({});
  const [columns, setColumns] = useState([]);
  const [collections, setCollections] = useState([]);
  const navigate = useNavigate();

  const showAddNewFieldModal = () => {
    modalOptions.heading = 'Add New Field';
    modalOptions.inputHeading = 'Name of the field';
    modalOptions.typeHeading = 'Type of the field';
    setModalOptions(modalOptions);
    setIsOpen(true);
  };

  useEffect(() => {
    makeRequest(GET_COLLECTION_DETAILS, navigate).then((response) => {
      setCollections(response.data);
      makeRequest(GET_DATA_OF_COLLECTION, navigate, {
        data: { collection_id: id },
      }).then((response) => {
        console.log(id);
        const col = [];
        for (let key in response.data[0].values.values) {
          col.push(key);
        }
        setColumns(col);
      });
    });
  }, []);

  return (
    <div>
      <div className='head'><Header/></div>
      <div className="add-field">
        <div className="table-profile">
          <p>
            ambuja_cement <FontAwesomeIcon icon={faEdit} />
          </p>
          <p id="number-of-fields">{columns.length} fields</p>
        </div>
        <div className="new-field">
          <p onClick={showAddNewFieldModal}>+ Add another field</p>
        </div>
        <div>
          {columns.map((col, index) => (
            <AddNewField key={index} col={col} />
          ))}
        </div>
      </div>
    </div>
  );
}
