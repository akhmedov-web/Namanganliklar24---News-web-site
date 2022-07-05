import React from 'react'
import ad from '../img/add.png'
import CategoryRightCard from './CategoryRightCard'
export default function CategoryRight() {
  return (
    <div className='categoryRight d-flex flex-column'>
      <div className="categoryRight_cards p-3">
        <h4 className='mb-3'>Cамые популярные новости</h4>
        <CategoryRightCard/>
        <CategoryRightCard/>
        <CategoryRightCard/>
        <CategoryRightCard/>
        <CategoryRightCard/>
        <CategoryRightCard/>
        <CategoryRightCard/>
      </div>
      <img src={ad} alt="img" className="category_ad" />
    </div>
  )
}
