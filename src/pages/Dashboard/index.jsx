import React from 'react';
import './index.css';
import ContentBuilder from '../../components/ContentBuilder';
import ContentDashboard from '../../components/ContentDashboard';
// import CollectionType from '../../components/CollectionType';

export default function Dashboard() {
  return (
    <div className="main">
      <div className="comp1">
        <ContentBuilder />
      </div>
      <div className="comp2">
        <ContentDashboard />
      </div>
    </div>
    // <div><CollectionType/></div>
  );
}
