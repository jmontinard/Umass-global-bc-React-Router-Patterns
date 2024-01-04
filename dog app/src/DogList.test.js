import React from 'react';
import { render } from '@testing-library/react';
import DogList from './DogList';

test('renders DogList component without crashing', () => {
  render(<DogList dogs={[]} />);
});

test('matches snapshot for DogList component', () => {
  const { container } = render(<DogList dogs={[]} />);
  expect(container).toMatchSnapshot();
});
