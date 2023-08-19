import React from 'react'
import { render } from '@testing-library/react'
import { useRouter } from 'next/router'
import { Footer } from '@/components'
import type * as ReactDom from 'react-dom'

// Mocking ReactDOM to avoid 'TypeError: (0 , _reactdom.preload) is not a function'
jest.mock('react-dom', () => ({
  ...jest.requireActual<typeof ReactDom>('react-dom'),
  preload: jest.fn(),
}))

// Mocking next/router to provide useRouter functionality
jest.mock('next/router', () => ({
  useRouter: () => ({
    locale: 'en',
    pathname: '/',
    push: jest.fn(),
  }),
}))

// Mock the useTranslation hook
jest.mock('../../../src/hooks/useTranslation', () => () => ({
  footer: {
    location: {
      label: 'Find Us',
      address:
        'Ave. Jorn. Aníbal Fernandes, no number - Cidade Universitária, Recife, PE, Brazil. Zip Code: 50740-560',
    },
  },
}))

// Test 1: Render the Footer without any errors
test('renders Footer component', () => {
  render(<Footer />)
})
