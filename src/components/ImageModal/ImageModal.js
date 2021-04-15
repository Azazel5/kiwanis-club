import './ImageModal.scss'

import BackgroundClickHook from '../../hooks/BackgroundClickHook'

const ImageModal = props => {
    // Props 
    const { selectedImage, closeModalHandler, modalBoxRef } = props

    // Using the custom backgroundClickHook, which gets the modalBoxRef and closeModalHandler
    // passed from ImageGallery. It'll detect clicks outside the image-modal__box div and close it
    BackgroundClickHook(modalBoxRef, closeModalHandler)

    return (
        <div className="image-modal">
            <div className="image-modal__box" ref={modalBoxRef}>
                <img src={selectedImage["path"]} alt="description" className="image-modal__box--img" />
                <p className="image-modal__box--p">{selectedImage["description"]}</p>
                <div onClick={closeModalHandler} className="cross-button">&#10005;</div>
            </div>
        </div>
    )
}

export default ImageModal