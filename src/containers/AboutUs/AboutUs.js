import './AboutUs.scss'
// Make a transparent image for Kiwanis about us page to replace here
import TransparentImage from '../../assets/Images/ex.png'
import StaticGallery from '../../components/StaticGallery/StaticGallery'

const AboutUs = props => {
    return (
        <div className="about-us">
            <div className="about-us__flexbox">
                <h2 className="about-us__flexbox__child">
                    This is <span>Kiwanis</span>
                </h2>
                <div className="about-us__flexbox__child horizontal-flex">
                    <img src={TransparentImage} alt="about us" className="horizontal-flex__img" />
                    <p className="horizontal-flex__p">
                        Kiwanis International is a global community of clubs, members and partners dedicated to improving the lives of children one community at a time. <br /> <br />Today, we stand with more than 550,000 members from K-Kids to Key Club to Kiwanis and many ages in between in 80 countries and geographic areas. Each community has different needs, and Kiwanis empowers members to pursue creative ways to serve the needs of children, such as fighting hunger, improving literacy and offering guidance.

                            <br /> <br />Kiwanis clubs host nearly 150,000 service projects each year.
                        </p>
                </div>
            </div>

            <div className="about-us__flexbox__child wavy-div"></div>
            <div className="about-us__flexbox__child about-us__flexbox__child--white">
                Meet our <span>Executive Board</span>
            </div>

            <StaticGallery />
        </div>
    )
}

export default AboutUs