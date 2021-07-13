import { useEffect, useState } from 'react'
import './NewsGallery.scss'

import { useHistory } from "react-router-dom";
import axios from 'axios';
import SimpleError from '../../Error/SimpleError/SimpleError';

const NewsGallery = props => {
    /** States and hooks */
    const [newsJson, setNewsJson] = useState(null)
    const [error, setError] = useState(null)
    const history = useHistory();

    /** Effects */
    useEffect(() => {
        axios.get('http://localhost:8000/api/news/')
            .then(response => {
                setNewsJson(response.data)
            })
            .catch(error => setError(error.message))
    }, [])

    let newsItems = null
    if (newsJson) {
        newsItems = newsJson.map(news => {
            return (
                <div className={`item news-section__item--${news.id}`}
                    key={news.id} onClick={() => history.push(`/news/${news.id}`)}>
                    <div className="text">
                        <span>{news.news_genre}</span>
                        <h2>{news.news_title}</h2>
                    </div>
                    <img src={news.news_image} alt="news" className="news-section__img" />
                </div>
            )
        })
    }

    return (
        error ? <SimpleError error={error} />: <section className="news">
            <h2>Recent Activity</h2>

            <div className="news-section">{newsItems && newsItems}</div>
        </section>
    )
}

export default NewsGallery