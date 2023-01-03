import "./css/ArticleSummary.css";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import NewsItem from "./newsItem.jsx";
import React from 'react'


const ArticleSummary = ({ itemList }) => {

    const location = useLocation();

    const NewsArticleItem = () => {
        window.scrollTo(0, 0);
        for (let newsItemIndex = 0; newsItemIndex < itemList.length; newsItemIndex++) {
            if ((itemList[newsItemIndex].props.item.id) === (location.state)) {
                return itemList[newsItemIndex].props.item;
            }
        }
    }


    return (
        <>
            <div className="card  bg-dark" >
                <div className="card bg-dark text-white" >
                    <div id="image" className="card-header" >
                        <><img src={NewsArticleItem().thumbnail} className="card-img" alt="news item thumbnail" /></>
                    </div>
                    <div className="card-header ">
                        <a href={NewsArticleItem().webUrl} target="_blank" rel="noopener noreferrer"><h2>{NewsArticleItem().headline}</h2></a>
                    </div>
                    <div className="card-body bg-dark">
                        <>{NewsArticleItem().bodyText}</>
                    </div>
                </div>
            </div>
        </>
    )

}


ArticleSummary.propTypes = {
    props: PropTypes.exact({
        response: PropTypes.shape({
            pageSize: PropTypes.number,
            results: PropTypes.arrayOf(PropTypes.shape({
                fields: PropTypes.shape({
                    headline: PropTypes.string,
                    thumbnail: PropTypes.string,
                    bodyText: PropTypes.string
                })
            }))
        })
    })
}

ArticleSummary.defaultProps = [{
    thumbnail: "https://via.placeholder.com/350x150",
    headline: "Default Headline",
    id: "default id",
    webUrl: "https://www.theguardian.com/uk",
    bodyText: "default body text"
}]


export default ArticleSummary;

