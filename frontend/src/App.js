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
                            ESUN stands for Ex-Students Unity of Nepal Law College. With an aim of contributing whatever we
                            have in our hands, a few likeminded friends of the same batch of Nepal Law College,
                            Kathmandu (batch of 1993), gathered together to form a group under the name of Kiwanis Club of
                            Kathmandu ESUN. This club was formed to serve children in need, and it is unique in doing so because
                            of the members' experience in law i.e. it's a social club of lawyers dedicated to helping childen.
                            <br /> <br />
                            In Nepal, it has been repeatedly observed that the most neglected portion of the population is the children. Working
                            parents face the pressures of earning a livelihood for their families, and they have no option other than putting their
                            growing children in the same workplace; these children are then forced to assist their parents just to add a number of working hands.
                            The government of Nepal has implemented free primary education up to fifth
                            standard, and this has shown positive indications of increasing the number of school going children; however, there's still many children being deprived of a proper school education,
                            due to the lack of basic educational materials, such as pens, pencils, school bags, or other stationery items.
                            <br /> <br />
                            The club hopes to support these children and their families by initiatives such as organizing the distribution of food,
                            educational materials, or providing tuition fee to the needy children.
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
