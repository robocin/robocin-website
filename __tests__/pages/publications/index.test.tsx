import React from 'react'
import { useRouter } from 'next/router'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import type * as ReactDom from 'react-dom'

import Publications from '@/pages'

// Mocking ReactDOM to avoid 'TypeError: (0 , _reactdom.preload) is not a function'
jest.mock('react-dom', () => ({
  ...jest.requireActual<typeof ReactDom>('react-dom'),
  preload: jest.fn(),
}))

// Mock useRouter
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    push: () => {},
  }),
}))

// Test 1: Render the Publications page any errors
test('renders Publications page', () => {
  render(<Publications />)
})
