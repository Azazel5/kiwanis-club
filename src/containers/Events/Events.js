import { useState, useRef } from 'react'

import './Events.scss'
import Event1 from '../../assets/Images/event1.jpeg'
import Event2 from '../../assets/Images/event2.jpeg'
import Event3 from '../../assets/Images/event3.jpeg'
import MapModal from '../../components/Modals/MapModal/MapModal'

const Events = props => {
    // Working on this sample JSON structure for events; more to come
    const eventInfo = [
        {
            'key': 1, 'latitude': 30.2672, 'longitude': -97.7431,
            'name': '66th Annual Circle K International Convention',
            'date': 'July 25-28, 2021', 'place': 'Austin, Texas, USA',
            'image': Event1
        },

        {
            'key': 2, 'latitude': 28.3772, 'longitude': -81.5707,
            'name': '2021 Key Club International Convention',
            'date': 'July 7-11, 2021', 'place': 'Walt Disney World Resort, Florida, USA',
            'image': Event2
        },

        {
            'key': 3, 'latitude': 40.7608, 'longitude': -111.8910,
            'name': '2021 Kiwanis Education and Leadership Conference',
            'date': 'June 24-26, 2021', 'place': 'Salt Lake City, Utah, USA',
            'image': Event3
        },
    ]

    const events = eventInfo.map(event => (
        <div className="events__row" onClick={() => openModalHandler(event)} key={event.key}>
            <img src={event.image} alt="event" className="events__row__child events__row__child--img" />
            <div className="events__row__child events__row__child--text">
                <h3 className="event-name">{event.name}</h3>
                <span className="event-date">{event.date}</span>
                <span className="event-place">{event.place}</span>
            </div>
        </div>
    ))

    // Fix the state initializer
    const [modalOpen, setModalOpen] = useState({ 'status': null, 'selectedEvent': null })
    const modalBoxRef = useRef()

    /** Event handlers **/
    const openModalHandler = (event) => {
        setModalOpen({ 'status': true, 'selectedEvent': event })
    }

    const closeModalHandler = () => {
        setModalOpen({ 'status': false, 'selectedEvent': null })
    }

    return (
        <div className="events" ref={modalBoxRef}>
            {modalOpen.status && <MapModal closeModalHandler={closeModalHandler} modalBoxRef={modalBoxRef} selectedEvent={modalOpen.selectedEvent} />}
            {events}
            <button className="events__button">Load More Events</button>
        </div>
    )
}

export default Events