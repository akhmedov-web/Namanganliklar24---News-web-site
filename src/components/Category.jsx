import React from 'react';
import "../style/category.css"
import CategoryLeft from './CategoryLeft';
import CategoryRight from './CategoryRight';

export default function Category() {
  return (
    <div className='category_block d-xl-flex d-block'>
        <CategoryLeft/>
        <CategoryRight/>  
    </div>
  )
}
