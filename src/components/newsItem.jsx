import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./css/newsItem.css";



const NewsItem = ({ item }) => {

    const { thumbnail, headline, id } = item
    return (
        <>

            <div className="card" >

                <img src={thumbnail} className="card-img-top" alt="news item thumbnail" />

                <div className="card-header bg-white">
                    <nav id="Nav">
                        <NavLink to={{ pathname: "./ArticleSummary" }} state={id} style={({ isActive }) => ({
                            color: isActive ? 'blue' : ' black',
                            textDecoration: "none"
                        })}>
                            <h2>{headline}</h2>

                        </NavLink>
                    </nav>
                </div>
            </div>

        </>
    );
};


NewsItem.propTypes = {
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

NewsItem.defaultProps = {
    thumbnail: "Default Image",
    headline: "Default Headline",
    id: "default id"
}

export default NewsItem;