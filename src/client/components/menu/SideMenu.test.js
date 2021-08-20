import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SideMenu from './SideMenu';
import { QtyProvider } from '../context/QtyContext';

const props = {
    items: [{
        id: 1000,
        name: 'Pasta Box',
        dietaries: ["df","v","ve"] 
       },
       {
        id: 1001,
        name: 'Salad Box',
        dietaries: ["df","v","ve"] 
       }],
    previewItems: [{
        id: 1000,
        name: 'Pasta Box',
        dietaries: ["df","v","ve"] 
       },
    ],
  };

jest.mock('./Api/item.api', () => ({
    itemsApi: {
        getItems: jest.fn().mockImplementation(() => Promise.resolve({
        place: 'holder',
        })),
        getPreviewItems: jest.fn().mockImplementation(() => Promise.resolve({
        place: 'holder',
        })),
  },
}));

jest.mock('./SearchInput', () => {
    return {
        __esModule: true,
        default: () => <div>SEARCH_INPUT_PLACEHOLDER</div>,
    }
});


describe('Rendering a SideMenu', () => {
  beforeEach(() => {
    const qty = 0;
    const setQty = jest.fn();
    render(
        <QtyProvider value={{qty, setQty}}>
             <SideMenu {...props} />
        </QtyProvider>
    );
  });

  test('renders SideMenu', async () => {
    const itemName = screen.getByText('Pasta Box');
    expect(itemName).toBeInTheDocument();
  });

  test('add item when left-side menu item is clicked', async () => {
    const addPreviewMenu = jest.fn();
    const addButton = screen.getByTestId('add-1001');
    
    userEvent.click(addButton);
    expect(addPreviewMenu).toHaveBeenCalled();
    await waitFor(() => expect(screen.getByText('Salad Box')).toBeInTheDocument());
  });

});