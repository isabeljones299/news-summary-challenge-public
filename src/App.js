import './components/css/App.css';
import Headlines from "./components/Headlines.jsx"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import ArticleSummary from "./components/ArticleSummary.jsx";
import NewsItemModel from './components/utils/NewsItem.model.js';
import NewsItem from './components/newsItem.jsx';
import axios from 'axios'
import React, { useState, useEffect } from 'react'





function App() {

  // const mockDataServer = `http://localhost:4000/response`
  const [newsData, setNewsData] = useState();
  const [errorStatus, setErrorStatus] = useState();

  const getNewsData = async () => {

    try {
      const res = await axios.get(process.env.REACT_APP_RESPONSEURL);
      setNewsData(res.data);
    } catch (e) {
      console.log(e);
      setErrorStatus(e.message);
    }
  };

  useEffect(() => {
    getNewsData();
  }, []);

  if (newsData) {
    const headlinesList = newsData.response.results?.map(currentNewsItem => {
      const { id, webUrl } = currentNewsItem
      const { thumbnail, headline, bodyText } = currentNewsItem.fields;
      const newsItem = new NewsItemModel(thumbnail, headline, bodyText, id, webUrl)
      return <NewsItem item={newsItem} key={newsItem.id} />
    })
    return (

      <div className="App">

        <div id="wrapper1">
          <div id="header">
            <div id="logo">
              <h1>Your News App</h1>
              <p> <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiRseyR4rz7AhVJZ8AKHXCgBmgQFnoECAoQAQ&url=https%3A%2F%2Fwww.theguardian.com%2Fuk&usg=AOvVaw2_eWfeDhZXalIdaJkUp3g5"> -- Click here --</a> to visit the Guardian website</p>
            </div>
            <div id="menu">
              <ul>
                <li className="homepage"><a href="/">Homepage</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div id="wrapper2">
          <Router>
            <Routes>
              <Route path="/" element={<Headlines itemList={headlinesList} />} />
              <Route path='/ArticleSummary/*' element={<ArticleSummary itemList={headlinesList} />} />
              <Route path='*' element={<h1>Page not found</h1>} />
            </Routes>
          </Router>
        </div>


        {/* insert footer here */}
      </div>

    );
  }


}

export default App;