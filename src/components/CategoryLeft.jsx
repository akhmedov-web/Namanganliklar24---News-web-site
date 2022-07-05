import React from 'react'
import CategoryLeftCard from './CategoryLeftCard'
export default function CategoryLeft() {
  return (
    <div className='categoryLeft mb-xl-0 mb-3'>
      <h4 className='mb-3'>Политика</h4>
      <div className="categoryLeft_cards w-100">
        <CategoryLeftCard/>
        <CategoryLeftCard/>
        <CategoryLeftCard/>
        <CategoryLeftCard/>
        <CategoryLeftCard/>
        <CategoryLeftCard/>
        <CategoryLeftCard/>
        <CategoryLeftCard/>
        <CategoryLeftCard/>
        <button type="button" class="btn btn-primary category_card_btn mt-4 mx-auto d-block">Больше новостей</button>
      </div>
    </div>
  )
}
