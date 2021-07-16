import { useEffect, useState } from 'react'
import './RenderSmoothImage.scss'

/**
 * A custom hook which loads images smoothly. It takes a classname, src, alt, 
 * and inlineStyles attributes (className and inlineStyles are optional).
 * It checks if the src is not empty and uses onLoad and onError functions 
 * to set relevant state values; using these, it sets some CSS classes which
 * makes a smooth animation, causing nice image loading.
 */
const RenderSmoothImage = ({ className, src, alt, inlineStyles }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [isValidSrc, setIsValidSrc] = useState(!!src)

    useEffect(() => {
        src ? setIsValidSrc(true) : setIsValidSrc(false)
    }, [src])

    return (
        <>
            {isValidSrc ? (
                <img
                    src={src} alt={alt} style={inlineStyles}
                    className={`${className} smooth-image image-${imageLoaded ? 'visible' : 'hidden'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setIsValidSrc(false)}
                />
            ) : <div className="smooth-no-image">{alt}</div>
            }

            {isValidSrc && !imageLoaded && (
                <div className="smooth-preloader">
                    <span className="loader" />
                </div>
            )}
        </>
    )
}

export default RenderSmoothImage