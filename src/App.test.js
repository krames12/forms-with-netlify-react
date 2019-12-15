import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders stay in touch header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/stay in touch/i);
  expect(headerElement).toBeInTheDocument();
});
