import NormalModal from '../NormalModal/NormalModal'
import Map from '../../Map/Map'

const MapModal = props => {
    const { closeModalHandler, modalBoxRef, selectedEvent } = props

    return (
        <NormalModal closeModalHandler={closeModalHandler} modalBoxRef={modalBoxRef}>
            <Map
                latitude={selectedEvent.event_location_latitude}
                longitude={selectedEvent.event_location_longitude} zoom={13}
                pinText={selectedEvent.event_place}
            />
        </NormalModal>
    )
}

export default MapModal