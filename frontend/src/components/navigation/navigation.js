import React from 'react'
import './navigation.scss'
import { useHistory, useLocation } from 'react-router-dom'

const Navigation = props => {
    /** Third party hooks **/
    const location = useLocation()
    const history = useHistory()

    /** Props variables **/
    const { navbarScrolled, menuButtonClickHandler, menuClicked } = props

    // Sets the menuButton animation styles, based on the menuClicked prop passed from App.js
    const menuButtonClasses = [
        'navigation-bar__icon', 'navigation-bar__flexbox__child', menuClicked ? 'navigation-bar__icon--cross' : 'navigation-bar__icon--flat'
    ]

    // Change navbar color when user scrolls past navbar height
    const navbarInlineStyles = { backgroundColor: navbarScrolled || location.pathname !== "/" ? 'white' : 'transparent' }

    // Set navbar elements color to be black when navbar has been scrolled, the menu button has been
    // clicked, or when the page is anything besides the homepage
    const flexboxInlineStyle = { filter: (navbarScrolled || menuClicked || location.pathname !== "/") && 'invert(1)' }

    return (
        <nav className="navigation-bar" style={navbarInlineStyles}>
            <div className="navigation-bar__flexbox" style={flexboxInlineStyle}>
                <div
                    className="navigation-bar__flexbox__child navigation-bar__flexbox__child--logo"
                    onClick={() => history.push("/")}
                >
                    <img src={`${process.env.REACT_APP_AWS_MEDIA_DIRNAME}kiwanis-logo.png`} alt="kiwanis logo" />

                    <div className="logos">
                        <div className="logos__box"><img src={`${process.env.REACT_APP_AWS_MEDIA_DIRNAME}kiwanis-title.png`} alt="kiwanis title" /></div>
                        <div className="logos__box logos__box--isun"><img src={`${process.env.REACT_APP_AWS_MEDIA_DIRNAME}isun.cbb929ff.png`} alt="isun logo" /></div>
                    </div>

                </div>

                <div className="navigation-bar__flexbox__child" onClick={menuButtonClickHandler}>
                    <div className={menuButtonClasses.join(" ")}></div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation