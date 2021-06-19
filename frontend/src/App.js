import { useCallback, useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import './App.scss'
import Navigation from './components/navigation/navigation'
import headerPhoto from './assets/Images/header-photo.jpeg'
import MenuOverlay from './components/MenuOverlay/MenuOverlay'
import NewsGallery from './components/NewsSection/NewsGallery/NewsGallery'
import NewsStory from './components/NewsSection/NewsStory/NewsStory'
import HomeImageGallery from './containers/HomeImageGallery/HomeImageGallery'
import Events from './containers/Events/Events'
import Projects from './containers/Projects/Projects'
import AboutUs from './containers/AboutUs/AboutUs'
import Footer from './components/Footer/footer'

const App = () => {
    /** State variables **/
    const [navbarScrolled, setNavbarScrolled] = useState(false)
    const [menuClicked, setMenuClicked] = useState(false)
    const [gallery, setGallery] = useState(null)

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

    useEffect(() => {
        axios.get('http://localhost:8000/gallery/')
            .then(response => {
                const updatedResponse = response.data.map(item => {
                    item['thumbnailClass'] = "image-gallery__thumbnail"
                    item['originalHeight'] = 400
                    item['thumbnailHeight'] = 100
                    item['thumbnail'] = item['original']
                    return item
                })

                setGallery(updatedResponse)
            })

            .catch(error => console.log("[-] Error in gallery loading!"))
    }, [])

    return (
        <>
            <Route exact path="/">
                <div className="app">

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

                    <NewsGallery />

                    <HomeImageGallery gallery={gallery} />
                </div>

            </Route>

            <Route exact path="/news/:newsId">
                <NewsStory />
            </Route>

            <Route exact path="/about">
                <AboutUs />
            </Route>

            <Route exact path="/events">
                <Events />
            </Route>

            <Route exact path="/projects">
                <Projects />
            </Route>

            {/* We want the navigation bar, footer, and menu overlay to be present in all pages, so
            we won't wrap it in a Route tag*/}
            <Navigation
                navbarScrolled={navbarScrolled} menuClicked={menuClicked}
                menuButtonClickHandler={menuButtonClickHandler} />

            <Footer />

            <MenuOverlay menuClicked={menuClicked} menuButtonClickHandler={menuButtonClickHandler} />
        </>
    );
}

export default App;
