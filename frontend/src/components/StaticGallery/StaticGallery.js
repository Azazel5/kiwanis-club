import './StaticGallery.scss'

const StaticGallery = props => {
    /** Props objects **/
    const { sizeOfGalleryCard, content, gridColor, createRows } = props

    /** Inline styles **/

    // sizeOfGalleryCard is the size that you want an individual card in the gallery to be at the very minimum. 
    // Using this, you'll be able to create flexible, responsive galleries with little code duplication.
    let gridStyles = null
    let imageStyles = null
    let centeredGalleryItems = null

    if (createRows) {
        gridStyles = {
            'gridAutoRows': '20rem',
            'gridTemplateColumns': `repeat(auto-fit, minmax(${sizeOfGalleryCard}rem, 1fr))`,
            'gridRowGap': '3rem',
            'gridColumnGap': '12rem',
        }

        imageStyles = { 'borderRadius': '50%', 'height': '12rem', 'width': '12rem' }
        centeredGalleryItems = { 'alignItems': 'center' }
    }

    else {
        gridStyles = {
            'gridTemplateColumns': `repeat(auto-fit, minmax(${sizeOfGalleryCard}rem, 1fr))`,
            'gridGap': '4rem'
        }

        imageStyles = { 'height': '29rem', 'width': '100%' }

        centeredGalleryItems = { 'alignItems': 'flex-start' }
    }

    /** Mapped variables **/
    const mappedItems = Object.keys(content).map(key => {
        return (
            <div className="static-gallery__item" key={key} style={centeredGalleryItems}>
                <img src={content[key]["path"]} alt="member" className="static-gallery__item--img" style={imageStyles} />
                <span className="static-gallery__item--name">{content[key]["name"]}</span>
                <span className="static-gallery__item--position">{content[key]["position"]}</span>

                {content[key]["description"] && <hr></hr>}

                {content[key]["description"] &&
                    <p className="static-gallery__item--description">
                        {content[key]["description"]}
                    </p>}

            </div>
        )
    })

    // gridColor is a string prop passed from AboutUs so the grid can apply the classes defined in 
    // AboutUs.scss
    return (
        <div className={`static-gallery about-us__flexbox__child--${gridColor}`} style={gridStyles}>
            {mappedItems}
        </div>
    )
}

export default StaticGallery