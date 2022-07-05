import React from 'react';

import rasm1 from "../img/prezedent.png"
import rasm2 from "../img/Karantin.png"
import rasm3 from "../img/desert.png"

import rasm4 from "../img/hokim.jpg"
import rasm5 from "../img/avto.jpg"
import rasm6 from "../img/karantin2.jpg"




import Content from './Content';
const MainFluid = () => {
    return (
        <div className='main-fluid'>
            <h2>Новости по теме </h2>

            <div className="case-fluid">
                <Content rasm={rasm1}>Мирзиёев рассказал, зачем было построено Сардобинское водохранилище</Content>
                <Content name="05:28 / 16.05.2020" rasm={rasm2}>Карантин в Узбекистане продлен до 1 июня</Content>
                <Content name="05:28 / 16.05.2020" rasm={rasm3}>Обмелевшая Сардоба: стихия иличеловеческий фактор?</Content>
                <Content name="05:28 / 16.05.2020" rasm={rasm4}>Обмелевшая Сардоба: стихия иличеловеческий фактор?</Content>
                <Content name="05:28 / 16.05.2020" rasm={rasm5}>Карантин в Узбекистане продлен до 1 июня</Content>
                <Content rasm={rasm6}>Мирзиёев рассказал, зачем было построено Сардобинское водохранилище</Content>


            </div>
        </div>
    );
};

export default MainFluid;