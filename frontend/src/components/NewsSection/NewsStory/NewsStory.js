import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './NewsStory.scss'
import SimpleError from '../../Error/SimpleError/SimpleError';

const NewsStory = props => {
    /** States and hooks */
    const [story, setStory] = useState(null)
    const [error, setError] = useState(null)
    const { newsId } = useParams();

    /** Effects */
    useEffect(() => {
        axios.get(`https://kiwanisnepali.org/api/news/${newsId}/`)
            .then(response => {
                setStory(response.data)
            })
            .catch(error => setError(error.message))
    }, [newsId])

    let componentToRender = null
    if (story)
        componentToRender = (
            <>
                <h1 className="news-story__child news-story__title">{story.news_title}</h1>
                <div className="news-story__child news-story__img">
                    <img src={story.news_image} alt="story" />
                </div>
                <p>{story.news_description}</p>
            </>
        )

    else if (error)
        componentToRender = <SimpleError error={error} />

    return (
        <div className="news-story">{componentToRender}</div>
    )
}

export default NewsStory