import React from 'react';




function Card() {
    return (
        <>
            <div className="Card2">

                <h1 className='Contact_card_title'>Namanganliklar24</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Электронная почта</th>
                            <td>info@namanganliklar24.uz</td>
                        </tr>
                        <tr>
                            <th>Социальные сети</th>
                            <td><div className="icons">
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-twitter-square"></i>
                                <i class="fab fa-odnoklassniki-square"></i>
                            </div></td>
                        </tr>
                        <tr>
                            <th>Телеграм канал</th>
                            <td><button><i class="fab fa-telegram"></i>Подписатся</button></td>
                        </tr>
                        <tr>
                            <th>Мобильная приложение</th>
                            <td>
                                <ul className='google_apps'>
                                    <div className='google_play'>
                                        <i class="fab fa-google-play"></i>
                                        <ul style={{ display: 'block' }}>
                                            <h3>Google play</h3>
                                            <p className='google_play_p'>юклаб олинг</p>
                                        </ul>
                                    </div>
                                    <div className='app_store'>
                                        <i class="fab fa-apple"></i>
                                        <ul style={{ display: 'block' }}>
                                            <h3>App Store</h3>
                                            <p className='app_store_p'>юклаб олинг</p>
                                        </ul>

                                    </div>
                                </ul></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Card;