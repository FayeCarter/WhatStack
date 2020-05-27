import React from 'react'
import { render, screen } from '@testing-library/react';
import User from "./user.js"

test('username is anonymous by default', () => {
  const randomName = 'anonymous';

  render(<User userName={randomName} />);
  expect(screen.getByText(`username: ${randomName}`)).toBeInTheDocument();
})
