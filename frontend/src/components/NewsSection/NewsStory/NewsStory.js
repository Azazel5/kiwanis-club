import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './NewsStory.scss'

const NewsStory = props => {
    /** States and hooks */
    const [story, setStory] = useState(null)
    const { newsId } = useParams();

    /** Effects */
    useEffect(() => {
        axios.get(`http://localhost:8000/news/${newsId}/`)
            .then(response => {
                setStory(response.data)
            })
            .catch(error => console.log(error))
    }, [newsId])

    if (story)
        return (
            <div className="news-story">
                <h1 className="news-story__child news-story__title">{story.news_title}</h1>
                <div className="news-story__child news-story__img">
                    <img src={story.news_image} alt="story" />
                </div>
                <p>{story.news_description}</p>
            </div>
        )
    else
        return <h1>Problem bitch</h1>
}

export default NewsStory