import './ImageModal.scss'

const ImageModal = props => {
    const { selectedImage, closeModalHandler } = props

    return (
        <div className="image-modal">
            <div className="image-modal__box">
                <img src={selectedImage["path"]} alt="description" className="image-modal__box--img" />
                <p className="image-modal__box--p">{selectedImage["description"]}</p>
                <div onClick={closeModalHandler} className="cross-button">&#10005;</div>
            </div>
        </div>
    )
}

export default ImageModal