import React from 'react';
import App from './App';
import { render, screen } from './utils/testUtils';

describe('Test App components: ', () => {
  it('App text should be rendered', () => {
    render(<App />);
    expect(screen.getByText('App')).toBeInTheDocument();
  });
});
