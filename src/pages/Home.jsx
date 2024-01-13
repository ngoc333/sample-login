import React from 'react';
import Card from '../components/Card';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();
  const cardData = {
    title: 'Sample Card',
    description: t('des'),
    imageUrl: 'https://placekitten.com/300/200', // Example image URL
  };
  return (
    <>
      <div className="flex justify-center items-center ">
        <Card {...cardData} />
      </div>
    </>
  );
};

export default Home;