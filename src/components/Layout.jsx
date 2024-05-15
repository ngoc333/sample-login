import React from 'react';
import Header from '../components/Header';
import NavBottom from './NavBottom';

import userImg from '../assets/images/avatar.png';

const FormLayout = ({ children, title }) => {
  const pageTitle = 'Title';
  const user = {
    username: 'Cyan',
    avatarUrl: userImg,
  };
  return (
    <div>
      <Header title={pageTitle} user={user} />
      <div className="w-full h-screen">{children}</div>
      <NavBottom/>
    </div>
  );
};

export default FormLayout;
