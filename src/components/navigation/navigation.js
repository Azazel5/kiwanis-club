import React from 'react'
import './navigation.scss'

import logo from '../../assets/Images/kiwanis-logo.png'
import title from '../../assets/Images/kiwanis-title.png'
import Symbols from '../../assets/SVG/basic-symbols.svg'

const Navigation = props => {
    /** Props variables **/
    const { navbarScrolled } = props

    /** Inline styles **/
    const navbarInlineStyles = { backgroundColor: navbarScrolled ? 'white' : 'transparent' }
    const flexboxInlineStyle = { filter: navbarScrolled && 'invert(1)' }

    return (
        <nav className="navigation-bar" style={navbarInlineStyles}>
            <div className="navigation-bar__flexbox" style={flexboxInlineStyle}>
                <div>
                    <img src={logo} alt="kiwanis logo" />
                </div>

                <div>
                    <img src={title} alt="kiwanis title" />
                </div>

                <div>
                    <svg className="navigation-bar__icon">
                        <use xlinkHref={`${Symbols}#icon-menu`}></use>
                    </svg>
                </div>
            </div>
        </nav>
    )
}

export default Navigation