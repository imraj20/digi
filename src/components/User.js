// User.js

import React, { useState } from 'react';
import './User.css';

const User = ({ user, onUpdateUser }) => {
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    onUpdateUser(updatedUser);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({
      ...updatedUser,
      [name]: value,
    });
  };

  return (
    <div className="user-container">
      <div className="user-details">
        <h2>User Details</h2>
        <div className="user-field">
          <label>Name</label>
          {editing ? (
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.name}</span>
          )}
        </div>
        <div className="user-field">
          <label>Age</label>
          {editing ? (
            <input
              type="number"
              name="age"
              value={updatedUser.age}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.age}</span>
          )}
        </div>
        <div className="user-field">
          <label>Gender</label>
          {editing ? (
            <input
              type="text"
              name="gender"
              value={updatedUser.gender}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.gender}</span>
          )}
        </div>
        <div className="user-field">
          <label>Company Name</label>
          {editing ? (
            <input
              type="text"
              name="company_name"
              value={updatedUser.company_name}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user.company_name}</span>
          )}
        </div>
        {editing ? (
          <button className="user-edit-button" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="user-edit-button" onClick={handleEdit}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
