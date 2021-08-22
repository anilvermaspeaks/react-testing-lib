import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Async from './Async'


describe('Async component', () => {

    test('renders post if rest api calls succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{
                id: 1,
                title: 'post 1'
            }]
        });
        render(<Async />);
        const listItems = await screen.findAllByRole('listitem');

        expect(listItems).not.toHaveLength(0);


    })

})