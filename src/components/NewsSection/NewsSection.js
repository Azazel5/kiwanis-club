import './NewsSection.scss'

import Image1 from '../../assets/Images/story-1-img.png'
import Image2 from '../../assets/Images/story-2-img.jpeg'
import Image3 from '../../assets/Images/story-3-img.jpeg'
import Image4 from '../../assets/Images/story-4-img.jpeg'
import Image5 from '../../assets/Images/story-5-img.jpeg'

const NewsSection = props => {
    return (
        <section className="news">
            <h2>News</h2>

            <div className="news-section">
                <div className="item news-section__item--1">
                    <img src={Image1} alt="" className="news-section__img" />
                    <div className="text">
                        <span>Title</span>
                        <h2>Content</h2>
                    </div>
                </div>

                <div className="item news-section__item--2">
                    <img src={Image2} alt="" className="news-section__img" />
                    <div className="text">
                        <span>Title</span>
                        <h2>Content</h2>
                    </div>
                </div>

                <div className="item news-section__item--3">
                    <img src={Image3} alt="" className="news-section__img" />
                    <div className="text">
                        <span>Title</span>
                        <h2>Content</h2>
                    </div>
                </div>

                <div className="item news-section__item--4">
                    <img src={Image4} alt="" className="news-section__img" />
                    <div className="text">
                        <span>Title</span>
                        <h2>Content</h2>
                    </div>
                </div>

                <div className="item news-section__item--5">
                    <img src={Image5} alt="" className="news-section__img" />
                    <div className="text">
                        <span>Title</span>
                        <h2>Content</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsSection