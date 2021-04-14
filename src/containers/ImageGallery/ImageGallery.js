import './ImageGallery.scss'

// Remove this after pushing the images to a backend 
import Image1 from '../../assets/Images/pic1.jpg'
import Image2 from '../../assets/Images/pic2.jpg'
import Image3 from '../../assets/Images/pic3.jpg'
import Image4 from '../../assets/Images/pic4.jpg'
import Image5 from '../../assets/Images/pic5.jpg'
import Image6 from '../../assets/Images/pic6.jpg'

const ImageGallery = props => {
    const images = [Image1, Image2, Image3, Image4, Image5, Image6]

    const galleryItems = images.map((image, index) => {
        return (
            <div className="image-container" key={index}>
                <img src={image} alt="distribution" className="image-container__item" />
            </div>
        )
    })

    return (
        <div className="image-gallery">
            <h2>Recent Highlights</h2>
            <div className="image-gallery__box">{galleryItems}</div>
        </div>
    )
}

export default ImageGallery