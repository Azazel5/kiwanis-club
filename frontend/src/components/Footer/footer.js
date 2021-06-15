import './footer.scss'

import Sprite from '../../assets/SVG/symbol-defs.svg'

const Footer = props => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__top-child">
                    <h2>About</h2>
                    <hr className="solid"></hr>
                    <a href="$#">Mission</a>
                    <a href="$#">History</a>
                    <a href="$#">Impact</a>
                    <a href="$#">Leadership</a>
                    <a href="$#">Values</a>
                    <a href="$#">Partners</a>
                    <a href="$#">Careers</a>
                </div>
                <div className="footer__top-child">
                    <h2>News</h2>
                    <hr className="solid"></hr>
                    <a href="$#">Stories</a>
                    <a href="$#">Social Media</a>
                    <a href="$#">Media Releases</a>
                    <a href="$#">Share your story</a>
                </div>
                <div className="footer__top-child">
                    <h2>Contact</h2>
                    <hr className="solid"></hr>
                    <div className="social-icon-container">
                        <a href="$#">
                            <svg className="social-icon-container__svg social-icon-container__svg--social">
                                <use xlinkHref={`${Sprite}#icon-facebook`}></use>
                            </svg>
                        </a>

                        <a href="$#">
                            <svg className="social-icon-container__svg social-icon-container__svg--social">
                                <use xlinkHref={`${Sprite}#icon-instagram`}></use>
                            </svg>
                        </a>

                        <a href="$#">
                            <svg className="social-icon-container__svg social-icon-container__svg--social">
                                <use xlinkHref={`${Sprite}#icon-twitter`}></use>
                            </svg>
                        </a>
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
                COPYRIGHT &copy; 2021 KIWANIS NEPAL. ALL RIGHTS RESERVED.
            </div>
        </footer>
    )
}

export default Footer