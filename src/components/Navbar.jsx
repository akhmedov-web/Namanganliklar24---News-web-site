import React, { useState } from 'react';
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'

const Navbar = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu((e) => !e)
    }



    return (
        <>
                <div className="navbar-fluid">
                    <h1 className='logo'>NAMANGANLIKLAR24</h1>

                    <ul className='links1'>
                        <li>$ 10137.2</li>
                        <li>P 138.26</li>
                        <li>E 10988.72</li>
                    </ul>
                    <ul className='links2'>
                        <li><i class="fas fa-search"></i></li>
                        <li><img src={props.img} /></li>
                        <button className='btn1'> <i class="fab fa-telegram"></i> Подписатся</button>
                    </ul>

                </div>


                <div className={toggleMenu ? 'navbar expanded' : 'navbar'}>

                    <ul>
                        <li>Узбекистана</li>
                        <li>Мир </li>
                        <li>Экономика</li>
                        <li>Политика</li>
                        <li>Общество </li>
                        <li>Технологии</li>
                        <li>Спорт </li>
                        <li>Культура</li>
                        <li> Происшествия</li>
                        <li>Туризм</li>
                    </ul>

                    <div className="toggle-icon" onClick={toggleNav}>
                        {toggleMenu ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
                    </div>

                </div>
                <div className="rasm"></div>

        </>
    );
};

export default Navbar;