import React from 'react';
import Radio from '../../components/Radio';

function Category() {
  const categories = [
    { value: 'sports' },
    { value: 'animal' },
    { value: 'art' },
  ];

  return (
    <>
      <Radio name="category" options={categories} />
    </>
  );
}

export default Category;
