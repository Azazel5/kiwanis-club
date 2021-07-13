import './ImageModal.scss'
import NormalModal from '../NormalModal/NormalModal'

const ImageModal = props => {
    const { closeModalHandler, modalBoxRef, selectedProject } = props

    return (
        // Pass a height prop to make the ImageModal bigger
        <NormalModal closeModalHandler={closeModalHandler} modalBoxRef={modalBoxRef} width={'50%'}>
            <img src={selectedProject.project_image} alt="description" className="image-modal--img" />
            <span className="image-modal--date centered">{selectedProject.project_date}</span>
            <p className="image-modal--p centered">{selectedProject.project_description}</p>
        </NormalModal>
    )
}

export default ImageModal