import React from 'react';
import './profile.css';

export const Profile = () => {
  return (
    <div className="profile">
      <img src="profile_img.jpeg" alt="Profile" className="profile__picture" />
      <h1 className="profile__title">Miguel Pine</h1>
    </div>
  );
};
