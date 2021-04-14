import './MenuOverlay.scss'

import { CSSTransition } from 'react-transition-group'

const MenuOverlay = props => {
    const { menuClicked } = props

    return (
        <CSSTransition
            in={menuClicked}
            timeout={700}
            classNames="overlay-animation"
            unmountOnExit
        >
            <div className="menu-overlay">
                <div className="menu-overlay__container">
                    <div className="menu-overlay__container__item">Events</div>
                    <div className="menu-overlay__container__item">Projects</div>
                    <div className="menu-overlay__container__item">About Us</div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default MenuOverlay