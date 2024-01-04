// DogDetails.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import DogDetails from './DogDetails';

test('renders DogDetails component without crashing', () => {
  const dogs = [
    {
      name: 'Whiskey',
      age: 5,
      src: 'whiskey.jpg',
      facts: ['Whiskey loves eating popcorn.'],
    },
  ];

  render(
    <MemoryRouter initialEntries={['/dogs/Whiskey']}>
      <Routes>
        <Route
          path="/dogs/:name"
          element={<DogDetails dogs={dogs} />}
        />
      </Routes>
    </MemoryRouter>
  );
});

test('matches snapshot for DogDetails component', () => {
  const dogs = [
    {
      name: 'Whiskey',
      age: 5,
      src: 'whiskey.jpg',
      facts: ['Whiskey loves eating popcorn.'],
    },
  ];

  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/Whiskey']}>
      <Routes>
        <Route
          path="/dogs/:name"
          element={<DogDetails dogs={dogs} />}
        />
      </Routes>
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
