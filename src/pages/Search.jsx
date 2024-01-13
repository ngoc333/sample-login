import React from 'react';
import Card from '../components/Card';

const Search = () => {
  const cardData = {
    title: 'Sample Card',
    description: 'This is a sample card description. You can customize it for your use.',
    imageUrl: 'https://placekitten.com/300/200', // Example image URL
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Card {...cardData} />
      </div>
    </>
  );
};

export default Search;