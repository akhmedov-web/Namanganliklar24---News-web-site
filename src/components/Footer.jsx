import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <ul className='footer-ul'>
                <li style={{ fontSize: '26px' }}>Namanganliklar24</li>
                <li>Подписывайтесь на наш канал в Telegram и будьте всегда в курсе самых последних новостей:</li>
                <button className='btn2'> <i class="fab fa-telegram"></i> Подписатся</button>


            </ul>

            <ul className='footer-ul2' >
                <li>О сайте <br />Воспроизводство, копирование, тиражирование, распространение и иное использование информации с сайта «NAMANGANLIKLAR24.UZ» возможно только с предварительного письменного разрешения редакции.</li>

                <li>Информация о сайте<br />Напишите нам<br />Реклама<br />Прислать новость</li>

                <li>Использование материалов <br />Темы дня <br />Наша команда</li>
            </ul>

        </div>
    );
};

export default Footer;