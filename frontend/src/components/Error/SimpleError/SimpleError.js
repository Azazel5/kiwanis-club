import './SimpleError.scss'

const SimpleError = props => {
    const { error } = props
    return (
        <div className="error">
            <span className="error__heading">There's an error occuring while handling that request</span>
            <h5>{error}</h5>
        </div>
    )
}

export default SimpleError