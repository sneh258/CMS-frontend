import React from 'react';
import './index.css';
import ContentBuilder from '../../components/ContentBuilder';
import CollectionType from '../../components/CollectionType';

export default function Collection() {
  return (
    <div className="main">
      <div className="comp3">
        <ContentBuilder />
      </div>
      <div className="comp4">
        <CollectionType />
      </div>
    </div>
  );
}
