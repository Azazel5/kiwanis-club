import './NewsGallery.scss'
import { newsContent } from '../NewsContent'

import { useHistory } from "react-router-dom";

const NewsGallery = props => {
    const history = useHistory();

    const newsItems = Object.keys(newsContent).map(key => {
        return (
            <div className={`item news-section__item--${key}`}
                key={key} onClick={() => history.push(`/news/${key}`)}>
                <div className="text">
                    <span>{newsContent[key]["genre"]}</span>
                    <h2>{newsContent[key]["title"]}</h2>
                </div>
                <img src={newsContent[key]["path"]} alt="news" className="news-section__img" />
            </div>
        )
    })

    return (
        <section className="news">
            <h2>News</h2>

            <div className="news-section">{newsItems}</div>
        </section>
    )
}

export default NewsGallery