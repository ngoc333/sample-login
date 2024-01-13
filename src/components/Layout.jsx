import React from 'react';
import Header from '../components/Header';

import userImg from '../assets/images/avatar.png';

const FormLayout = ({ children }) => {
  const pageTitle = 'Title';
  const user = {
    username: 'Cyan',
    avatarUrl: userImg,
  };
  return (
    <div>
      <Header title={pageTitle} user={user} />
      <div className="w-full h-screen">{children}</div>
    </div>
  );
};

export default FormLayout;
