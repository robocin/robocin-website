import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Footer } from '@/components'
import type * as ReactDom from 'react-dom'

// Mocking ReactDOM to avoid 'TypeError: (0 , _reactdom.preload) is not a function'
jest.mock('react-dom', () => ({
  ...jest.requireActual<typeof ReactDom>('react-dom'),
  preload: jest.fn(),
}))

// Test 1: Render the Footer without any errors
test('renders Footer component', () => {
  render(<Footer />)
})
