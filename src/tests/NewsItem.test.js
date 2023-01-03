import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsItemModel from '../components/utils/NewsItem.model';
import NewsItem from "../components/NewsItem"
import { MemoryRouter } from 'react-router-dom';


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        state: "mockId1"
    })
}));

describe('newsItem test', () => {

    test('newsItem img renders', () => {
        //arrange
        const mockItem = new NewsItemModel("https://via.placeholder.com/150", "Mock Headline1", "mock body text1", "mockId1")
        //act
        render(
            <MemoryRouter><NewsItem item={mockItem} /></MemoryRouter>
        );
        //assert
        expect(screen.getByRole("img")).toBeInTheDocument();
    });


});