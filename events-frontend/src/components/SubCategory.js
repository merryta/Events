import React from 'react';
import { useParams } from 'react-router';

import "../styles/SubCategory.css";

const SubCategory = () => {
  let {subcategoryId} = useParams();
  return (
    <div className="subcategory__container">
      Sub category is {subcategoryId}
    </div>
  )
}

export default SubCategory;
