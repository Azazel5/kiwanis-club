import { useEffect, useState, useRef } from 'react'
import axios from 'axios';

import './Events.scss'
import MapModal from '../../components/Modals/MapModal/MapModal'

const Events = props => {
    /** States */
    const [modalOpen, setModalOpen] = useState({ 'status': null, 'selectedEvent': null })
    const [eventJson, setEventJson] = useState(null)
    const modalBoxRef = useRef()

    /** Effects */
    useEffect(() => {
        axios.get('http://localhost:8000/events/')
            .then(response => setEventJson(response.data))
            .catch(error => console.log("[-] Events could not be loaded"))
    }, [])

    let events = null
    if (eventJson) {
        events = eventJson.map(event => (
            <div className="events__row" onClick={() => openModalHandler(event)} key={event.id}>
                <img src={event.event_image} alt="event" className="events__row__child events__row__child--img" />
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

    return (
        <div className="events">

            {modalOpen.status &&
                <MapModal closeModalHandler={closeModalHandler} modalBoxRef={modalBoxRef}
                    selectedEvent={modalOpen.selectedEvent} />}

            {events && events}
            <button className="events__button">Load More Events</button>
        </div>
    )
}

export default Events