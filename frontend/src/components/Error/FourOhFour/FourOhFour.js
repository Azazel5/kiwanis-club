import './FourOhFour.scss'

const FourOhFour = props => {
    return (
        <div className="four-oh-four">
            <h1 className="first-four">4</h1>
            <div className="cog-wheel1">
                <div className="cog1">
                    <div className="four-oh-four__top"></div>
                    <div className="four-oh-four__down"></div>
                    <div className="four-oh-four__left-top"></div>
                    <div className="four-oh-four__left-down"></div>
                    <div className="four-oh-four__right-top"></div>
                    <div className="four-oh-four__right-down"></div>
                    <div className="four-oh-four__left"></div>
                    <div className="four-oh-four__right"></div>
                </div>
            </div>

            <div className="cog-wheel2">
                <div className="cog2">
                    <div className="four-oh-four__top"></div>
                    <div className="four-oh-four__down"></div>
                    <div className="four-oh-four__left-top"></div>
                    <div className="four-oh-four__left-down"></div>
                    <div className="four-oh-four__right-top"></div>
                    <div className="four-oh-four__right-down"></div>
                    <div className="four-oh-four__left"></div>
                    <div className="four-oh-four__right"></div>
                </div>
            </div>
            <h1 className="second-four">4</h1>
            <p className="wrong-para">Uh Oh! Page not found!</p>
        </div>
    )
}

export default FourOhFour