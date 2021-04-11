import { useCallback, useEffect, useState } from 'react'
import './App.scss'

import Navigation from './components/navigation/navigation'
import headerPhoto from './assets/Images/header-photo.jpeg'

const App = () => {
    /** State variables **/
    const [navbarScrolled, setNavbarScrolled] = useState(false)

    /** Event Handlers **/

    // Checks if the navbar has been scrolled past its height or not. Sets the 
    // set to true or false, which will be used to change the styling of the navbar in each case
    const navbarScrollStateHandler = useCallback(() => {
        const changeNavbar = window.scrollY > 65
        if (changeNavbar !== navbarScrolled) {
            setNavbarScrolled(changeNavbar)
        }
    }, [navbarScrolled])

    /** Effects **/
    useEffect(() => {
        document.addEventListener('scroll', navbarScrollStateHandler)
        return () => {
            document.removeEventListener('scroll', navbarScrollStateHandler)
        }
    }, [navbarScrollStateHandler])

    return (
        <div className="app">
            <Navigation navbarScrolled={navbarScrolled} />

            <div className="app_image-container">
                <img src={headerPhoto} alt="header" className="app_image-container__image" />
            </div>

            <div className="test">
                More content
            </div>
        </div>
    );
}

export default App;
