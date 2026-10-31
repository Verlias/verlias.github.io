import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the terminal portfolio and project collection', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /logan voravong/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /distributed gpu inference orchestrator/i })).toBeInTheDocument();
});
