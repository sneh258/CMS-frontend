/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdContentCopy } from 'react-icons/md';
import './index.css';

export default function Entry({ data }) {
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
          <div className="entry-options">
            <MdContentCopy />
            <FaRegEdit />
            <RiDeleteBin6Line />
          </div>
        </div>
      </div>
      {/* // {cols.map((x)=>(<div className="entry-container">
    //   <div className="id-entry">{ data[x]}</div>
    //   <div className="entry-options">
    //     <MdContentCopy />
    //     <FaRegEdit />
    //     <RiDeleteBin6Line />
    //   </div>
    // </div>))}
    // <div className="entry-container">
    //   <div className="id-entry">1</div>
    //   <div className="name-entry">Name</div>
    //   <div className="entry">Text</div>
    //   <div className="entry">Text</div>
    //   <div className="entry-options">
    //     <MdContentCopy />
    //     <FaRegEdit />
    //     <RiDeleteBin6Line />
    //   </div>
    // </div> */}
    </>
  );
}
