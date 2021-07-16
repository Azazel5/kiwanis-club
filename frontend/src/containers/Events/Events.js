import { useEffect, useState, useRef } from 'react'
import axios from 'axios';

import './Events.scss'
import MapModal from '../../components/Modals/MapModal/MapModal'
import SimpleError from '../../components/Error/SimpleError/SimpleError';
import Loading from '../../components/Loading/Loading';
import RenderSmoothImage from '../../hooks/RenderSmoothImage/RenderSmoothImage';

const Events = props => {
    /** States */
    const [modalOpen, setModalOpen] = useState({ 'status': null, 'selectedEvent': null })
    const [eventJson, setEventJson] = useState(null)
    const [error, setError] = useState(null)

    // Set event pagination and loading indicator states
    const [loadingClicked, setLoadingClicked] = useState(false)
    const modalBoxRef = useRef()

    /** Effects */
    useEffect(() => {
        axios.get('https://www.kiwanisnepali.org/api/events/')
            .then(response => setEventJson(response.data))
            .catch(error => setError(error.message))
    }, [])

    // If the loading button is clicked and there exists a next page for the events
    // endpoint, run this effect; wait for a second and send a request to the next 
    // URL, set loading to false, and append the new events to the previous eventJson
    useEffect(() => {
        if (loadingClicked && eventJson.next) {
            setTimeout(() => {
                axios.get(eventJson.next)
                    .then(response => {
                        setLoadingClicked(false)

                        setEventJson(prevJson => ({
                            ...prevJson,
                            next: response.data.next,
                            results: [...prevJson.results, ...response.data.results]
                        }))

                    })

                    .catch(error => setError(error.message))
            }, 1000)
        }
    }, [loadingClicked, eventJson])

    let events = null
    if (eventJson) {
        events = eventJson.results.map(event => (
            <div className="events__row" onClick={() => openModalHandler(event)} key={event.id}>
                <RenderSmoothImage src={event.event_image} alt="event" className="events__row__child events__row__child--img" />
                <div className="events__row__child events__row__child--text">
                    <h3 className="event-name">{event.event_name}</h3>
                    <span className="event-date">{event.event_date}</span>
                    <span className="event-place">{event.event_place}</span>
                </div>
            </div>
        ))
    }

    /** Event handlers **/
    const openModalHandler = (event) => {
        setModalOpen({ 'status': true, 'selectedEvent': event })
    }

    const closeModalHandler = () => {
        setModalOpen({ 'status': false, 'selectedEvent': null })
    }

    const loadingButtonClickHandler = () => {
        setLoadingClicked(true)
    }

    return (
        <div className="events">

            {modalOpen.status &&
                <MapModal closeModalHandler={closeModalHandler} modalBoxRef={modalBoxRef}
                    selectedEvent={modalOpen.selectedEvent} />}

            {error ? <SimpleError error={error} /> : events && events}

            {/* If there is error, loading button isn't clicked, and there are more events to load, show 
            the load more events button  */}
            {!error && (eventJson && eventJson.next) && !loadingClicked && <button className="events__button" onClick={loadingButtonClickHandler}>
                Load More Events
            </button>}

            {loadingClicked && <Loading />}
        </div>
    )
}

export default Events