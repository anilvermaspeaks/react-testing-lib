import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greetings'


describe('Greeting component', () => {

    test('renders hello worls as tetx', () => {
        render(<Greeting />);
        const hellNode = screen.getByText(/hello/i);

        expect(hellNode).toBeInTheDocument();


    })

    test('render good to see you if button is not clicked', () => {
        render(<Greeting />);
        const paraNode = screen.getByText(/Good to see you/i);
        expect(paraNode).toBeInTheDocument()
    });

    test('not render good to see you if button is clicked', () => {
        render(<Greeting />);
        const btnEle = screen.getByRole(
            'tab'
        )
        userEvent.click(btnEle)
        const paraode = screen.queryByText(/Good to see you/i);
        expect(paraode).not.toBeInTheDocument();
    });

})