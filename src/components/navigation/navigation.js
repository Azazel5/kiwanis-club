import React from 'react'
import './navigation.scss'
import { useLocation } from 'react-router-dom'

import logo from '../../assets/Images/kiwanis-logo.png'
import title from '../../assets/Images/kiwanis-title.png'

const Navigation = props => {
    /** Third party hooks **/
    const location = useLocation()

    /** Props variables **/
    const { navbarScrolled, menuButtonClickHandler, menuClicked } = props

    // Sets the menuButton animation styles, based on the menuClicked prop passed from App.js
    const menuButtonClasses = ['navigation-bar__icon', menuClicked ? 'navigation-bar__icon--cross' : 'navigation-bar__icon--flat']

    // Change navbar color when user scrolls past navbar height
    const navbarInlineStyles = { backgroundColor: (navbarScrolled && !menuClicked) || location.pathname !== "/" ? 'white' : 'transparent' }

    // Set navbar elements color to be black when navbar has been scrolled, the menu button has been
    // clicked, or when the page is anything besides the homepage
    const flexboxInlineStyle = { filter: (navbarScrolled || menuClicked || location.pathname !== "/") && 'invert(1)' }

    return (
        <nav className="navigation-bar" style={navbarInlineStyles}>
            <div className="navigation-bar__flexbox" style={flexboxInlineStyle}>
                <div>
                    <img src={logo} alt="kiwanis logo" />
                </div>

                <div>
                    <img src={title} alt="kiwanis title" />
                </div>

                <div onClick={menuButtonClickHandler}>
                    <div className={menuButtonClasses.join(" ")}></div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation