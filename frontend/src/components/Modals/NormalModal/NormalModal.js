import './NormalModal.scss'

import BackgroundClickHook from '../../../hooks/BackgroundClickHook'

/**
 * A base modal class, which is used by other kinds of modals (like ImageModal). This 
 * has a BackgroundClickHook operating on it, which closes the modal on background click.
 */
const NormalModal = props => {
    const { closeModalHandler, modalBoxRef } = props

    // Using the custom backgroundClickHook, which gets the modalBoxRef and closeModalHandler
    // passed from ImageGallery. It'll detect clicks outside the image-modal__box div and close it
    BackgroundClickHook(modalBoxRef, closeModalHandler)

    return (
        <div className="normal-modal">
            <div className="normal-modal__box" ref={modalBoxRef}>
                <div onClick={closeModalHandler} className="cross-button">&#10005;</div>
                {props.children}
            </div>
        </div>
    )
}

export default NormalModal