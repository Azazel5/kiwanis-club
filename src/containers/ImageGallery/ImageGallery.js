import { useRef, useState } from 'react'
import './ImageGallery.scss'

import { ImageJson } from './ImageContent'
import ImageModal from '../../components/ImageModal/ImageModal'
import { CSSTransition } from 'react-transition-group'
import { scrollTo } from '../../utils/animations/animations'

const ImageGallery = props => {
    /** State variables **/
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);
    const [disableScroll, setDisableScroll] = useState({ leftButton: true, rightButton: false })
    const galleryBoxRef = useRef()

    /** Event handlers **/
    const setModalStateHandler = (key) => {
        setModalOpen(true)
        setSelectedImage(ImageJson[key])
    }

    const closeModalHandler = () => {
        setModalOpen(false)
    }

    // On left/right button click, disables both buttons first, advances the gallery box's left
    // scroll position, and sets the state of the buttons depening on if scrollLeft is 0
    // (leftButton should be disabled), maximum scroll achieved (rightButton should be disabled)
    // or both buttons enabled. 
    const scrollButtonClickHandler = scrollOffset => {
        setDisableScroll({ leftButton: true, rightButton: true })

        scrollTo(galleryBoxRef.current, galleryBoxRef.current.scrollLeft + scrollOffset, 1250, () => {
            const maximumRightScroll = galleryBoxRef.current.scrollWidth - galleryBoxRef.current.clientWidth;

            if (galleryBoxRef.current.scrollLeft === maximumRightScroll)
                setDisableScroll({ leftButton: false, rightButton: true })
            else if (galleryBoxRef.current.scrollLeft === 0)
                setDisableScroll({ leftButton: true, rightButton: false })
            else
                setDisableScroll({ leftButton: false, rightButton: false })
        })
    }

    /** Higher order functions **/

    // Loops through the ImageJson object and creates the image containers with their images
    // Structure the backend Json response similar to ImageContent.js 
    const galleryItems = Object.keys(ImageJson).map(key => {
        return (
            <div className="image-container" key={key} onClick={() => setModalStateHandler(key)}>
                <img src={ImageJson[key]["path"]} alt="distribution" className="image-container__item" />
            </div>
        )
    })

    /** Inline Styles **/
    const leftButtonStyles = { borderColor: disableScroll['leftButton'] ? '#CDCDCD' : 'black' }
    const rightButtonStyles = { borderColor: disableScroll['rightButton'] ? '#CDCDCD' : 'black' }

    return (
        <div className="image-gallery">
            <h2>Highlights</h2>
            <div className="image-gallery__box" ref={galleryBoxRef}>{galleryItems}</div>
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

            <div className="image-gallery__button-container">
                <button style={leftButtonStyles} onClick={() => scrollButtonClickHandler(-500)} disabled={disableScroll['leftButton']} className="button">&#8592;</button>
                <button style={rightButtonStyles} onClick={() => scrollButtonClickHandler(500)} disabled={disableScroll['rightButton']} className="button">&#8594;</button>
            </div>
        </div>
    )
}

export default ImageGallery