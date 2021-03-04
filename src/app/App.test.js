import { render, screen } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  test('Snapshot test', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test('renders `List of candidates` Dashboard header', () => {
    render(<App />);
    const linkElement = screen.getByText(/List of candidates/i);
    expect(linkElement).toBeInTheDocument();
  });
});
