import React from 'react'
import GooglePlay from "./google-play.png";
import './footer.css'
export const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="container-xxl">
                <div className="footer-links">
                    <ul className="footer-lists">
                        <li><a href="/">Довідка для покупців</a></li>
                        <li><a href="/">Отримати підтримку</a></li>
                        <li><a href="/">Як купувати</a></li>
                        <li><a href="/">Як залишити корисний відгук</a></li>
                        <li><a href="/">Програма Захисту Покупців</a></li>
                        <li><a href="/">Рекомендації з безпечних покупок</a></li>
                    </ul>
                    <ul className="footer-lists">
                        <li><a href="/">Довідка для продавців</a></li>
                        <li><a href="/">Як почати продавати</a></li>
                        <li><a href="/">Тарифи</a></li>
                        <li><a href="/">Угода користувача</a></li>
                        <li><a href="/">Політика конфіденційності</a></li>
                        <li><a href="/">Правила користування порталом</a></li>
                        <li><a href="/">Бонусна програма</a></li>
                    </ul>
                    <ul className="footer-lists">
                        <li><a href="/">Про нас</a></li>
                        <li><a href="/">Довідка та FAQ</a></li>
                        <li><a href="/">Захист легальності контенту</a></li>
                        <li><a href="/">Адміністрація</a></li>
                        <li><a href="/">Вакансії</a></li>
                    </ul>
                    <div className='footer-google-play'>
                        <span>Мобільний додаток</span>
                        <a href="/" ><img src={GooglePlay} alt="" /></a>
                    </div>
                </div>
                <p className="footer-monvilise">© 2022 Monvalise</p>
            </div>
        </div>
    );
}
