/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './index.css';
import AddNewType from '../AddNewType';
import AddNewField from '../AddNewField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import { makeRequest } from './../../utils/makeRequest';
import {
  GET_COLLECTION_DETAILS,
  GET_DATA_OF_COLLECTION,
} from '../../constants/apiEndPoints';

export default function ContentDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState({});
  const [columns, setColumns] = useState([]);

  const showAddNewContentModal = () => {
    modalOptions.heading = 'Add New Content Type';
    modalOptions.inputHeading = 'Name of the content type';
    setModalOptions(modalOptions);
    setIsOpen(true);
  };
  const showAddNewFieldModal = () => {
    modalOptions.heading = 'Add New Field';
    modalOptions.inputHeading = 'Name of the field';
    modalOptions.typeHeading = 'Type of the field';
    setModalOptions(modalOptions);
    setIsOpen(true);
  };

  const [collections, setCollections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_COLLECTION_DETAILS, navigate).then((response) => {
      setCollections(response.data);
      makeRequest(GET_DATA_OF_COLLECTION, navigate, {
        data: { collection_id: 1 },
      }).then((response) => {
        const col = [];
        for (let key in response.data[0].values.values) {
          col.push(key);
        }
        setColumns(col);
      });
    });
  }, []);

  return (
    <div className="main_div">
      <Header text={'Content Type'} />
      <div className="details">
        <div className="add-content-type">
          <div className="new-type">
            <p onClick={showAddNewContentModal}>+ New Type</p>
          </div>
          <div>
            {collections.length !== 0 ? (
              collections.map((collections) => (
                <AddNewType key={collections.id} data={collections.name} />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
        <div className="add-field">
          <div className="table-profile">
            <p>
              Company_Profile <FontAwesomeIcon icon={faEdit} />
            </p>
            <p id="number-of-fields">13 fields</p>
          </div>
          <div className="new-field">
            <p onClick={showAddNewFieldModal}>Add another field</p>
          </div>
          <div>
            {columns.map((col, index) => (
              <AddNewField key={index} col={col} />
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          modalOptions={modalOptions}
          setModalOptions={setModalOptions}
        />
      )}
    </div>
  );
}
