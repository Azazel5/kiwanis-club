import './Events.scss'
import Event1 from '../../assets/Images/event1.jpeg'
import Event2 from '../../assets/Images/event2.jpeg'
import Event3 from '../../assets/Images/event3.jpeg'

const Events = props => {
    return (
        <div className="events">
            <div className="events__row">
                <img src={Event1} alt="event" className="events__row__child events__row__child--img" />
                <div className="events__row__child events__row__child--text">
                    <h3 className="event-name">66th Annual Circle K International Convention</h3>
                    <span className="event-date">July 25-28, 2021</span>
                    <span className="event-place">Austin, Texas, USA</span>
                </div>
            </div>

            <div className="events__row">
                <img src={Event2} alt="event" className="events__row__child events__row__child--img" />
                <div className="events__row__child events__row__child--text">
                    <h3 className="event-name">2021 Key Club International Convention</h3>
                    <span className="event-date">July 7-11, 2021</span>
                    <span className="event-place">Walt Disney World Resort, Floride, USA</span>
                </div>
            </div>

            <div className="events__row">
                <img src={Event3} alt="event" className="events__row__child events__row__child--img" />
                <div className="events__row__child events__row__child--text">
                    <h3 className="event-name">2021 Kiwanis Education and Leadership Conference</h3>
                    <span className="event-date">June 24-26, 2021</span>
                    <span className="event-place">Salt Lake City, Utah, USA</span>
                </div>
            </div>

            <button className="events__button">Load More Events</button>
        </div>
    )
}

export default Events