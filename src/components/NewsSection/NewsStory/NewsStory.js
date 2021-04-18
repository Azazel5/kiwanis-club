import { useParams } from 'react-router-dom'

import { newsContent } from '../NewsContent'
import './NewsStory.scss'

const NewsStory = props => {
    let { newsId } = useParams();

    return (
        <div className="news-story">
            <h1 className="news-story__child news-story__title">{newsContent[newsId]["title"]}</h1>
            <div className="news-story__child news-story__img">
                <img src={newsContent[newsId]["path"]} alt="story" />
            </div>
            <p>{newsContent[newsId]["description"]}</p>
        </div>
    )
}

export default NewsStory