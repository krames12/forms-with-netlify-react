import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from '../index';
import expectExport from 'expect';

test('renders empty form', () => {
  const { findByTestId } = render(<ContactForm />);
  const allInputs = findByTestId('input-element');
  expectExport(allInputs).toBeDefined()
});
