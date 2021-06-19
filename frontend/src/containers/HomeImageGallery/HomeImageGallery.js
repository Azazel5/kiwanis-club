import './HomeImageGallery.scss'

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const HomeImageGallery = props => {
    let { gallery } = props

    // Adding static fields required by the react-image-gallery to the gallery props
    // passed from App.js

    return (
        <div className="image-gallery">
            <h2>Highlights</h2>
            {gallery && <ImageGallery items={gallery} showPlayButton={false} />}
        </div>
    )
}

export default HomeImageGallery