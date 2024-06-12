import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('Should be open TagSelector after click go tag icon', () => {
    render(<App />);

    expect(screen.queryByTestId('tag-selector')).toBeNull();

    fireEvent.click(screen.getByTestId('go-tag'));

    expect(screen.getByTestId('tag-selector')).toBeInTheDocument();
  });
});