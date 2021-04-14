import { useState } from 'react'
import './ImageGallery.scss'

import { ImageJson } from './ImageContent'
import ImageModal from '../../components/ImageModal/ImageModal'
import { CSSTransition } from 'react-transition-group'

const ImageGallery = props => {
    /** State variables **/
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);

    /** Event handlers **/
    const setModalStateHandler = (key) => {
        setModalOpen(true)
        setSelectedImage(ImageJson[key])
    }

    const closeModalHandler = () => {
        setModalOpen(false)
    }

    /** Higher order functions **/
    const galleryItems = Object.keys(ImageJson).map(key => {
        return (
            <div className="image-container" key={key} onClick={() => setModalStateHandler(key)}>
                <img src={ImageJson[key]["path"]} alt="distribution" className="image-container__item" />
            </div>
        )
    })

    return (
        <div className="image-gallery">
            <h2>Recent Highlights</h2>
            <div className="image-gallery__box">{galleryItems}</div>
            <CSSTransition
                in={modalOpen}
                timeout={700}
                classNames="image-modal-animation"
                unmountOnExit
            >
                <ImageModal 
                    selectedImage={selectedImage} modalOpen={modalOpen}
                    closeModalHandler={closeModalHandler} />
            </CSSTransition>
        </div>
    )
}

export default ImageGallery