// Listing.js

import React from 'react';
import './Listing.css';

const Listing = ({ users }) => {
  return (
    <div className="listing-container">
      <h2>User Listing</h2>
      {users.map((user, index) => (
        <div key={index} className="listing-item">
          <a href={`/user/${user.name}`}>{user.name}</a>
        </div>
      ))}
    </div>
  );
};

export default Listing;
