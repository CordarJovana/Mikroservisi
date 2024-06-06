import React from 'react';
import '../../style/News.css';
function News(props) {
    const { title, text } = props;

    return (
        <div className="news-container">
            <span className="news-title">
                {title}
            </span>
            <p className="news-text">{text}</p>
        </div>
    );
}

export default News;
