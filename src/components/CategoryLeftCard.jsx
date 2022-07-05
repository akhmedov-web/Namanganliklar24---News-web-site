import React from 'react'

export default function CategoryLeftCard() {
    return (
        <div className="categoryLeft-card d-flex">
            <img src="https://storage.kun.uz/source/8/uE5RukLHDd6nvS4Ls9MRxYHxmupPyUG3.jpg" alt="img" className='categoryLeft_card_img' />
            <div className="categoryLeft_card_content ps-3 ">
                <h6 className='categoryLeft_card_title'>Мирзиёев: «Нам следовало бы принять некоторые правила
                    карантина как часть повседневной жизни»
                </h6>
                <p className="categoryLeft_card_desc d-xl-block d-none">
                    Президент Узбекистана заявил, что после того,
                    как угроза коронавируса исчезнет, в стране следовало бы
                    принять некоторые правила периода карантина как часть своей повседневной жизни.
                </p>
                <i class="far fa-calendar-alt me-1 text-secondary"></i><span className='text-secondary'>11:31</span><span className='text-secondary'> / </span><span className='text-secondary'>15.05.2022</span>
            </div>
        </div>
    )
}
