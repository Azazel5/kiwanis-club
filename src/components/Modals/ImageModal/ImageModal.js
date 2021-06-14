import './ImageModal.scss'
import NormalModal from '../NormalModal/NormalModal'

const ImageModal = props => {
    const { closeModalHandler, modalBoxRef, selectedImage, imageDescription } = props

    return (
        <NormalModal closeModalHandler={closeModalHandler} modalBoxRef={modalBoxRef}>
            <img src={selectedImage} alt="description" className="image-modal--img" />
            <p className="image-modal--p">{imageDescription}</p>
        </NormalModal>
    )
}

export default ImageModal