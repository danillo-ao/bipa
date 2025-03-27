import React from 'react';

import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';

import { apiClient } from '@sdk/client';
import { MOCK_LightningNodeRankings } from '@sdk/mock/lightning.mock';

import ThemeProvider from '@theme/theme.provider';

import { HomeScreen } from '../home.screen';

jest.mock('@sdk/client');
jest.mock('react-hot-toast');

const mockedApiClient = apiClient as jest.Mocked<typeof axios>;

const MockScreenComponent: React.FC = () => (
  <ThemeProvider>
    <HomeScreen />
  </ThemeProvider>
);

describe('HomeScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedApiClient.get.mockResolvedValue({ status: 200, data: MOCK_LightningNodeRankings });
  });

  test('render the screen correctly with list data', async () => {
    render(<MockScreenComponent />);

    await waitFor(() => {
      const listItems = screen.queryAllByRole('node-list-item');
      expect(listItems).toHaveLength(MOCK_LightningNodeRankings.length);
    });
  });

  test('filter the node list data', async () => {
    render(<MockScreenComponent />);

    // expect that the elements were rendered correctly by mock
    await waitFor(() => {
      const listItems = screen.queryAllByRole('node-list-item');
      expect(listItems).toHaveLength(MOCK_LightningNodeRankings.length);
    });

    // when filter, expect that just one element will be found
    await waitFor(() => {
      fireEvent.change(screen.getByTestId('search-input'), { target: { value: 'ACINQ' } });

      const listFilteredItems = screen.queryAllByRole('node-list-item');
      expect(listFilteredItems).toHaveLength(1);
      expect(screen.queryByText('ACINQ')).toBeInTheDocument();
    });
  });

  test('filter not found any data', async () => {
    render(<MockScreenComponent />);

    // expect that the elements were rendered correctly by mock
    await waitFor(() => {
      const listItems = screen.queryAllByRole('node-list-item');
      expect(listItems).toHaveLength(MOCK_LightningNodeRankings.length);
    });

    // when filter, expect to not find any element
    await waitFor(() => {
      fireEvent.change(screen.getByTestId('search-input'), { target: { value: 'lorem-ipsum' } });
      const listFilteredItems = screen.queryAllByRole('node-list-item');

      expect(listFilteredItems).toHaveLength(0);
      expect(screen.getByText('Nenhum resultado de busca foi encontrado', { exact: false })).toBeInTheDocument();
    });
  });

  test('api error', async () => {
    const errorMessage = 'Request failed with status code 400';
    mockedApiClient.get.mockImplementation(() => {
      throw new Error(errorMessage);
    });

    render(<MockScreenComponent />);

    // expect to find the api error message on the screen
    await waitFor(() => {
      const listItems = screen.queryAllByRole('node-list-item');

      expect(listItems).toHaveLength(0);
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });

  test('copy the public key on click', async () => {
    Object.assign(navigator, { clipboard: { writeText: jest.fn() } });
    render(<MockScreenComponent />);

    // expect to call the clipboard.writeText with the public key of the node
    await waitFor(() => {
      const listItems = screen.queryAllByRole('node-list-item');
      expect(listItems.length).toBeGreaterThan(0);

      fireEvent.click(listItems[0]);
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(MOCK_LightningNodeRankings[0].publicKey);
    });
  });
});
