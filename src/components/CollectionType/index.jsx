import React, { useState, useEffect } from 'react';
import Entry from '../Entry';
import SideModal from '../SideModal';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { makeRequest } from '../../utils/makeRequest';
import { GET_DATA_OF_COLLECTION } from '../../constants/apiEndPoints';

export default function CollectionType() {
  const [isOpen, setIsOpen] = useState(false);
  const [collections, setCollections] = useState([]);
  const [columns, setColumns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_DATA_OF_COLLECTION, navigate, {
      data: { collection_id: 1 },
    }).then((response) => {
      setCollections(response.data);
      const col = [];
      for (let key in response.data[0].values.values) {
        col.push(key);
        if (col.length == 4) break;
      }
      setColumns(col);
    });
  }, []);

  return (
    <div className="collection-type-container">
      <Header text={'abc_company'} />
      <div className="collection-type-header">
        <div className="entries-number">13 Entries Found</div>
        <button className="add-entry" onClick={() => setIsOpen(true)}>
          Add a new entry
        </button>
      </div>
      <div className="table-heading">
        {columns.map((col, index) => (
          <div className="id-entry" key={index}>
            {col}
          </div>
        ))}
        {/* <div className="id-entry">ID</div>
        <div className="name-entry">Name</div>
        <div className="entry">Field 1</div>
        <div className="entry">Field 2</div>
        <div className="entry-options">Actions</div> */}
      </div>
      {collections.map((data, index) => {
        return collections.length !== 0 ? (
          <Entry cols={columns} key={index} data={data.values.values} />
        ) : (
          <></>
        );
      })}
      {isOpen && <SideModal setIsOpen={setIsOpen} />}
    </div>
  );
}
