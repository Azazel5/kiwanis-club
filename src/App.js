import { useCallback, useEffect, useState } from 'react'
import './App.scss'

import Navigation from './components/navigation/navigation'
import headerPhoto from './assets/Images/header-photo.jpeg'
import MenuOverlay from './components/MenuOverlay/MenuOverlay'
import ImageGallery from './containers/ImageGallery/ImageGallery'
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

            <div className="app__image-container">
                <img src={headerPhoto} alt="header" className="app__image-container__image" />
            </div>

            <div className="app__purpose-container">
                <h2>Our Purpose</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt sem quis neque sagittis congue a quis neque. Mauris turpis magna, accumsan ut tellus ac, gravida viverra augue. Aliquam erat volutpat. Nam in placerat dui. Maecenas tincidunt lobortis facilisis. Etiam pharetra lorem at nulla sagittis, ut gravida lacus convallis. Donec eros odio, mollis vitae dapibus et, pulvinar ut odio. Sed porta orci ut ullamcorper ultricies. Vivamus suscipit turpis at nisi semper, sit amet vestibulum est commodo. Maecenas consequat lobortis enim, a euismod quam sodales et. Vestibulum tempor vulputate sem, nec ullamcorper nibh suscipit aliquet.

                    Maecenas vel posuere magna. Phasellus sagittis lectus quam, vitae scelerisque diam vestibulum at. Nullam risus magna, cursus ut lorem vitae, finibus laoreet eros. Integer vulputate tincidunt magna sed rutrum. Pellentesque suscipit posuere molestie. In consectetur eu risus sit amet mollis. Fusce non risus vel lectus vehicula suscipit vel sed magna.

                    Vestibulum hendrerit ut sem molestie aliquet. In eget aliquam ligula. Sed diam urna, auctor finibus nunc aliquam, tempor mollis libero. Pellentesque varius tincidunt ullamcorper. Vivamus suscipit tortor sed facilisis mattis. In aliquam odio a sapien porttitor posuere. Nam porttitor faucibus felis eget cursus.
                </p>
            </div>

            <ImageGallery />

            <Footer />
        </div>
    );
}

export default App;
