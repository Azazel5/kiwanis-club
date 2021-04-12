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
            <div className="menu-overlay"></div>
        </CSSTransition>
    )
}

export default MenuOverlay