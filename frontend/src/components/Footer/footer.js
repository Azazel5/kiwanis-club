import './footer.scss'

import Sprite from '../../assets/SVG/symbol-defs.svg'

const Footer = props => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__top-child">
                    <h2>About</h2>
                    <hr className="solid"></hr>
                    <div><a href="/about">Mission</a></div>
                    <div><a href="/about">Leadership</a></div>
                </div>

                <div className="footer__top-child">
                    <h2>Contact</h2>
                    <hr className="solid"></hr>
                    <div>
                        <div className="social-icon-container">
                            <a href="https://www.facebook.com/profile.php?id=100054222051873">
                                <svg className="social-icon-container__svg social-icon-container__svg--social">
                                    <use xlinkHref={`${Sprite}#icon-facebook`}></use>
                                </svg>
                            </a>

                            <a href="/about">
                                <svg className="social-icon-container__svg social-icon-container__svg--social">
                                    <use xlinkHref={`${Sprite}#icon-instagram`}></use>
                                </svg>
                            </a>

                            <a href="/about">
                                <svg className="social-icon-container__svg social-icon-container__svg--social">
                                    <use xlinkHref={`${Sprite}#icon-twitter`}></use>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="contact-phone-container">
                        <svg className="social-icon-container__svg social-icon-container__svg--nonsocial"><use xlinkHref={`${Sprite}#icon-compass2`}></use></svg>
                        <p>1234 Lazimpat Street, Maharajgunj 55415, Nepal</p>
                    </div>

                    <div className="contact-phone-container">
                        <svg className="social-icon-container__svg social-icon-container__svg--nonsocial"><use xlinkHref={`${Sprite}#icon-mobile2`}></use></svg>
                        <p>+977 9810203040, +977 9879124210</p>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                COPYRIGHT &copy; 2021 KIWANIS KATHMANDU. ALL RIGHTS RESERVED.
            </div>
        </footer>
    )
}

export default Footer