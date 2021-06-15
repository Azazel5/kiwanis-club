import './ImageModal.scss'
import NormalModal from '../NormalModal/NormalModal'

const ImageModal = props => {
    const { closeModalHandler, modalBoxRef, selectedProject } = props

    return (
        <NormalModal closeModalHandler={closeModalHandler} modalBoxRef={modalBoxRef}>
            <img src={selectedProject.projectImage} alt="description" className="image-modal--img" />
            <span className="image-modal--date centered">{selectedProject.projectDate}</span>
            <p className="image-modal--p centered">{selectedProject.description}</p>
        </NormalModal>
    )
}

export default ImageModal