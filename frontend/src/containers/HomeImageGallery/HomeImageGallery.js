import './HomeImageGallery.scss'

import { images } from './ImageContent'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const HomeImageGallery = props => {
    return (
        <div className="image-gallery">
            <h2>Highlights</h2>
            <ImageGallery items={images} showPlayButton={false} />
        </div>
    )
}

export default HomeImageGallery