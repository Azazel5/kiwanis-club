import './StaticGallery.scss'

import { staticGallery } from './StaticGalleryContent'

const StaticGallery = props => {
    const mappedItems = Object.keys(staticGallery).map(key => {
        return (
            <div className="static-gallery__item" key={key}>
                <img src={staticGallery[key]["path"]} alt="member" className="static-gallery__item--img" />
                <span className="static-gallery__item--name">{staticGallery[key]["name"]}</span>
                <span className="static-gallery__item--position">{staticGallery[key]["position"]}</span>
            </div>
        )
    })
    return (
        <div className="static-gallery about-us__flexbox__child--white">
            {mappedItems}
        </div>
    )
}

export default StaticGallery