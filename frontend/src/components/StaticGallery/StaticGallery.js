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
            'gridRowGap': '6rem',
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
    let mappedItems = null
    if (content) {

        // Made changes to 
        mappedItems = content.map(employee => {
            return (
                <div className="static-gallery__item" key={employee.id} style={centeredGalleryItems}>
                    <img src={employee.employee_image} alt="member" className="static-gallery__item--img" style={imageStyles} />
                    <span className="static-gallery__item--name">{employee.employee_name}</span>
                    <span className="static-gallery__item--position">{employee.employee_position}</span>

                    {!createRows && <hr></hr>}
                    {employee.employee_email && <span className="static-gallery__item--email">{employee.employee_email}</span>}
                </div>
            )
        })
    }

    // gridColor is a string prop passed from AboutUs so the grid can apply the classes defined in 
    // AboutUs.scss
    return (
        <div className={`static-gallery about-us__flexbox__child--${gridColor}`} style={gridStyles}>
            {mappedItems && mappedItems}
        </div>
    )
}

export default StaticGallery