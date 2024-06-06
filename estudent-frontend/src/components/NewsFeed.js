import Title from '../components/subcomponents/Title';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import News from '../components/subcomponents/News';
import '../style/NewsFeed.css';

function NewsFeed() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await axios.get('http://backend:1337/getActiveNews');
                setNews(response.data.activeNews);
            } catch (error) {
                console.error(error);
            }
        }
        fetchNews();
    }, []);
    return (
        <div className="news-feed">
            <Title title="Обавештења" />
            <div className="news">
                {news.map((item) => (
                    <News key={item.id} title={item.naslov} text={item.tekst} />
                ))}
            </div>
        </div>
    );
}

export default NewsFeed;
