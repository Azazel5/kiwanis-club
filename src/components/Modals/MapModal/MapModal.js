import NormalModal from '../NormalModal/NormalModal'
import Map from '../../Map/Map'

const MapModal = props => {
    const { closeModalHandler, modalBoxRef } = props

    return (
        <NormalModal closeModalHandler={closeModalHandler} modalBoxRef={modalBoxRef}>
            <Map latitude={30.2672} longitude={-97.7431} zoom={13} />
        </NormalModal>
    )
}

export default MapModal