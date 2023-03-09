import React, { useState } from 'react';
import './index.css';
import AddNewType from '../AddNewType';
import AddNewField from '../AddNewField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal';
import Header from '../Header';

export default function ContentDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState({});

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

  return (
    <div className="main_div">
      <Header />
      <div className="details">
        <div className="add-content-type">
          <div className="new-type">
            <p onClick={showAddNewContentModal}>+ New Type</p>
          </div>
          <div>
            <AddNewType />
            <AddNewType />
            <AddNewType />
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
            <AddNewField />
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
