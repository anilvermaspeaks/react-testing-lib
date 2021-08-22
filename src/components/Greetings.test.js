import { render, screen } from '@testing-library/react';
import Greeting from './Greetings'

test('renders hello worls as tetx', () => {
    render(<Greeting />);
    const hellNode = screen.getByText(/hello/i);

    expect(hellNode).toBeInTheDocument();


})