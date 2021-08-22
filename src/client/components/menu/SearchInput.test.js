import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from './SearchInput';

const setSearchItem = jest.fn((value) => {});

describe('renders Search Bar', () => {
    test('types into the input', () => {
       const { queryByPlaceholderText } = render(<SearchInput setSearchItem={setSearchItem}/>)
  
        const searchInput = queryByPlaceholderText(/Search/)
  
        userEvent.type(searchInput, 'test')
  
        expect(searchInput.value).toBe('test')
    })
})