import React from 'react';
import PropTypes from 'prop-types';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdContentCopy } from 'react-icons/md';
import './index.css';

export default function Entry({ data }) {

  const handleDelete = async() =>{
    
  };
  return (
    <>
      <div>
        <div className="entry-container">
          {Object.values(data).map((x, index) => {
            return (
              <div className="id-entry" key={index}>
                {x}
              </div>
            );
          })}
          <div onClick={handleDelete} className="entry-options">
            <MdContentCopy />
            <FaRegEdit />
            <RiDeleteBin6Line />
          </div>
        </div>
      </div>
    </>
  );
}

Entry.propTypes = {
  data: PropTypes.array.isRequired,
};
