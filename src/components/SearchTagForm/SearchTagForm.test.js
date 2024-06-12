import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchTagForm from './SearchTagForm';

describe('SearchTagForm component', () => {
    const mockHandleSearch = jest.fn();
    const mockHandleTagClick = jest.fn();
    const mockOnSubmit = jest.fn();

    it('renders full form when isActiveSearch is true', () => {
        render(
            <SearchTagForm
                isActiveSearch={true}
                setIsActiveSearch={jest.fn()}
                onSubmit={mockOnSubmit}
                handleSearch={mockHandleSearch}
                searchValue=""
                handleTagClick={mockHandleTagClick}
                list={[]}
            />
        );

        const searchInput = screen.getByPlaceholderText('Wyszukaj grupę lub tag');
        const saveButton = screen.getByText('Zapisz');

        expect(searchInput).toBeInTheDocument();
        expect(saveButton).toBeInTheDocument();
    });

    it('calls handleSearch on input change', () => {
        render(
            <SearchTagForm
                isActiveSearch={false}
                setIsActiveSearch={jest.fn()}
                onSubmit={mockOnSubmit}
                handleSearch={mockHandleSearch}
                searchValue=""
                handleTagClick={mockHandleTagClick}
                list={[]}
            />
        );

        const searchInput = screen.getByPlaceholderText('Wyszukaj grupę lub tag');
        fireEvent.change(searchInput, { target: { value: 'Maryla' } });

        expect(mockHandleSearch).toHaveBeenCalledTimes(1);
        expect(mockHandleSearch).toHaveBeenCalledWith('Maryla');
    });
});
