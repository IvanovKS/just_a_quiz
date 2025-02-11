import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Radio from '../../components/Radio';

function Category() {
  const categories = [
    { value: 'Sports', id: uuidv4() },
    { value: 'Animal', id: uuidv4() },
    { value: 'Art', id: uuidv4() },
  ];

  return (
    <>
      <Radio name="category" options={categories} />
    </>
  );
}

export default Category;
