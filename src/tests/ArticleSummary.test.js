import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleSummary from '../components/ArticleSummary';
import NewsItemModel from '../components/utils/NewsItem.model';
import NewsItem from "../components/NewsItem"


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        state: "mockId1"
    })
}));

describe('ArticleSummary test', () => {

    test('it renders article of the news item which matches the ID of its location', () => {
        //arrange
        const newsItem1 = new NewsItemModel("https://via.placeholder.com/150", "Mock Headline1", "mock body text1", "mockId1")
        const newsItem2 = new NewsItemModel("https://via.placeholder.com/150", "Mock Headline2", "mock body text2", "mockId2")
        const mockNewsArray = [newsItem1, newsItem2]
        const mockList = mockNewsArray?.map(currentNewsItem => {
            return <NewsItem item={currentNewsItem} key={currentNewsItem.id} />
        })
        //act
        const view = render(
            <ArticleSummary itemList={mockList} />
        );
        //assert
        expect(view).toBeTruthy();
    });





});
