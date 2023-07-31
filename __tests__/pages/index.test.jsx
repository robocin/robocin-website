import React from 'react';
import { useRouter } from 'next/router'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '@/pages'

jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))

describe('Home page', () => {

    useRouter.mockReturnValue({
        query: {},
        push: () => {},
    });

    it('Should render', () => {
        render(<Home />);
    });
})