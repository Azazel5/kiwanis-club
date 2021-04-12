import { useCallback, useEffect, useState } from 'react'
import './App.scss'

import Navigation from './components/navigation/navigation'
import headerPhoto from './assets/Images/header-photo.jpeg'
import MenuOverlay from './components/MenuOverlay/MenuOverlay'
import Footer from './components/Footer/footer'

const App = () => {
    /** State variables **/
    const [navbarScrolled, setNavbarScrolled] = useState(false)
    const [menuClicked, setMenuClicked] = useState(false)

    /** Event Handlers **/

    // Checks if the navbar has been scrolled past its height or not. Sets the 
    // set to true or false, which will be used to change the styling of the navbar in each case
    const navbarScrollStateHandler = useCallback(() => {
        const changeNavbar = window.scrollY > 65
        if (changeNavbar !== navbarScrolled) {
            setNavbarScrolled(changeNavbar)
        }
    }, [navbarScrolled])

    // Sets the menuButtonClicked state to the opposite of previous value. This event handler is
    // passed to the navigation child component so its child (the actual div element) can call
    // it onClick.
    const menuButtonClickHandler = () => {
        setMenuClicked(prevMenuClicked => !prevMenuClicked)
    }

    /** Effects **/
    useEffect(() => {
        document.addEventListener('scroll', navbarScrollStateHandler)
        return () => {
            document.removeEventListener('scroll', navbarScrollStateHandler)
        }
    }, [navbarScrollStateHandler])

    return (
        <div className="app">
            <MenuOverlay menuClicked={menuClicked} />
            <Navigation
                navbarScrolled={navbarScrolled} menuClicked={menuClicked}
                menuButtonClickHandler={menuButtonClickHandler} />

            <div className="app_image-container">
                <img src={headerPhoto} alt="header" className="app_image-container__image" />
            </div>

            <div className="test">
                More content
            </div>

            <Footer />
        </div>
    );
}

export default App;
