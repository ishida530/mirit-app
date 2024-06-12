import React from 'react';
import { render, screen } from '@testing-library/react';
import TagSelector from './TagSelector';

describe('TagSelector component', () => {
    const handleClose = jest.fn();

    beforeEach(() => {
        render(<TagSelector handleClose={handleClose} />);
    });

    it('display TagSelector component', () => {
        const tagSelectorElement = screen.getByTestId('tag-selector');
        expect(tagSelectorElement).toBeInTheDocument();
    });

    it('renders TagSelector with close icon in header', () => {
        const headlineElement = screen.getByText('Nie dodano tagów');
        expect(headlineElement).toBeInTheDocument();

        const closeIcon = screen.getByTestId('close-icon');
        expect(closeIcon).toBeInTheDocument();
    });
});

