import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PreviewMenu from './PreviewMenu';
import { QtyProvider } from '../context/QtyContext';

const props = {
    previewMenu: [{
        id: 1000,
        name: 'Pasta Box',
        dietaries: ["df","v","ve"] 
       },
       {
        id: 1001,
        name: 'Salad Box',
        dietaries: ["df","v","ve"] 
       }],
    setPreviewMenu: jest.fn(),
  };

describe('Rendering a PreviewMenu', () => {
  beforeEach(() => {
    render(
        <QtyProvider value={null}>
             <PreviewMenu {...props} />
        </QtyProvider>
    );
  });

  test('renders PreviewMenu', async () => {
    const itemName = await waitFor(() => screen.getByText('Pasta Box'));
    expect(itemName).toBeInTheDocument();
  });

  test('remove item when X is clicked', async () => {
    const deleteItem = jest.fn();
    const deleteButton = screen.getByTestId('remove-1000');
    
    userEvent.click(deleteButton);
    expect(deleteItem).toHaveBeenCalled();
    await waitFor(() => expect(screen.getByText('Pasta Salad Box')).not.toBeInTheDocument());
  });

});