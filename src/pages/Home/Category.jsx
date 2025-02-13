import React from 'react';
import Radio from '../../components/Radio';
import { useSelector } from 'react-redux';

function Category() {
  const categories = useSelector((state) => state.quiz.categories);

  return (
    <>
      <Radio name="category" options={categories} />
    </>
  );
}

export default Category;
