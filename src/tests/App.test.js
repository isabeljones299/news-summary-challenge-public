import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';

describe('App snapshot test', () => {
    test('App component renders', () => {
        const view = render(<App />);
        expect(view).toBeTruthy();
    });
});
