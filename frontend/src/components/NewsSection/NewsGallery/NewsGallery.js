import { useEffect, useState } from 'react'
import './NewsGallery.scss'

import { useHistory } from "react-router-dom";
import axios from 'axios';

const NewsGallery = props => {
    /** States and hooks */
    const [newsJson, setNewsJson] = useState(null)
    const history = useHistory();

    /** Effects */
    useEffect(() => {
        axios.get('http://localhost:8000/news/')
            .then(response => {
                setNewsJson(response.data)
            })
            .catch(error => console.log(error))
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
        <section className="news">
            <h2>News</h2>

            <div className="news-section">{newsItems && newsItems}</div>
        </section>
    )
}

export default NewsGallery