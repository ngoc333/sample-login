import React from 'react';
import Card from '../components/Card';
import TimePicker from '../components/TimePicker/TimePicker';
import DatePickerComponent from '../components/DatePicker/DatePicker';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
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
      <TimePicker />
      <DatePickerComponent />
    </>
  );
};

export default Home;
