import './MenuOverlay.scss'

import { CSSTransition } from 'react-transition-group'
import { useHistory } from 'react-router-dom'

const MenuOverlay = props => {
    // Third party hooks 
    const history = useHistory()

    // Props variables
    const { menuClicked, menuButtonClickHandler } = props

    // Event Handlers 
    const menuItemClickhandler = (nextUrl) => {
        history.push(nextUrl)
        menuButtonClickHandler()
    }

    return (
        <CSSTransition
            in={menuClicked}
            timeout={700}
            classNames="overlay-animation"
            unmountOnExit
        >
            <div className="menu-overlay">
                <div className="menu-overlay__container">
                    <div className="menu-overlay__container__item" onClick={() => menuItemClickhandler("/")}>Home</div>
                    <div className="menu-overlay__container__item" onClick={() => menuItemClickhandler("/events")}>Events</div>
                    <div className="menu-overlay__container__item">Projects</div>
                    <div className="menu-overlay__container__item" onClick={() => menuItemClickhandler("/about")}>About Us</div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default MenuOverlay