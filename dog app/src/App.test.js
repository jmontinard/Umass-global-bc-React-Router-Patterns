import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import App from './App';

test('navigates to DogDetails when a dog is clicked', () => {
  const dogs = [
    {
      name: 'Whiskey',
      age: 5,
      src: 'whiskey.jpg',
      facts: ['Whiskey loves eating popcorn.'],
    },
    {
      name: 'Duke',
      age: 3,
      src: 'duke.jpg',
      facts: ['Duke believes that ball is life.'],
    },
  ];

  render(
    <MemoryRouter initialEntries={['/dogs']}>
      <Route path="/dogs">
        <App dogs={dogs} />
      </Route>
    </MemoryRouter>
  );

  // Click on a dog in the list
  fireEvent.click(screen.getByText('Whiskey'));

  // Ensure that DogDetails is rendered for Whiskey
  expect(screen.getByText('Whiskey loves eating popcorn.')).toBeInTheDocument();
});
