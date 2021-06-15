import NormalModal from '../NormalModal/NormalModal'
import Map from '../../Map/Map'

const MapModal = props => {
    const { closeModalHandler, modalBoxRef, selectedEvent } = props

    return (
        <NormalModal closeModalHandler={closeModalHandler} modalBoxRef={modalBoxRef}>
            <Map
                latitude={selectedEvent.latitude} longitude={selectedEvent.longitude} zoom={13}
                pinText={selectedEvent.place}
            />
        </NormalModal>
    )
}

export default MapModal