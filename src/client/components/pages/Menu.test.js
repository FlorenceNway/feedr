import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import Menu from './Menu';

jest.mock('/client/Api', () => ({
    itemsApi: {
        getItems: jest.fn().mockImplementation(() => Promise.resolve({
        place: 'holder',
        })),
        getPreviewItems: jest.fn().mockImplementation(() => Promise.resolve({
        place: 'holder',
        })),
  },
}));

jest.mock('/client/components/menu/SideMenu', () => ({
  SideMenu: () => <div>SIDE_MENU_PLACEHOLDER</div>,
}));


describe('Page renders and incudes expected components', () => {
  test('<Menu />', async () => {
    render(<Menu />);

    await waitFor(() => screen.getByText(/SIDE_MENU_PLACEHOLDER/));
    screen.getByText(/SIDE_MENU_PLACEHOLDER/);
  });
});