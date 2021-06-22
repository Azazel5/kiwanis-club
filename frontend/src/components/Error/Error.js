import './Error.scss'

const Error = props => {
    const { error } = props
    return (
        <div className="error">
            <span className="error__heading">There's an error occuring while handling that request</span>
            <h5>{error}</h5>
        </div>
    )
}

export default Error