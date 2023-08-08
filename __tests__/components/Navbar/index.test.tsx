import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Navbar } from '@/components'
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
  navbar: {
    options: {
      home: 'Home',
      categories: 'Categories',
      // team: 'Team',
      papers: 'Papers',
    },
  },
}))

// Test 1: Render the Navbar without any errors
test('renders the Navbar component', () => {
  render(<Navbar />)
})

// Test 2: Check if the navigation options are rendered correctly
test('renders the navigation options correctly', () => {
  const { getByText } = render(<Navbar />)
  expect(getByText('Home')).toBeInTheDocument()
  expect(getByText('Categories')).toBeInTheDocument()
  // expect(getByText('Team')).toBeInTheDocument()
  expect(getByText('Papers')).toBeInTheDocument()
})

// Test 3: Check if the language options are rendered correctly
test('renders the language options correctly', () => {
  const { getByTestId, getByLabelText } = render(<Navbar />)
  const selectElement = getByTestId('language')
  expect(selectElement).toBeInTheDocument()

  const optionEN = getByTestId('EN')
  const optionPT = getByTestId('PT')

  expect(optionEN).toBeInTheDocument()
  expect(optionPT).toBeInTheDocument()
})

// Test 4: Check if changing the language triggers the correct behavior
test('changes the language correctly', () => {
  const { getByTestId } = render(<Navbar />)
  const selectElement = getByTestId('language') as HTMLSelectElement

  fireEvent.change(selectElement, { target: { value: 'pt-BR' } })
  expect(selectElement.value).toBe('pt-BR')
})

// Test 5: Check if the menu toggle works correctly
test('toggles the menu correctly', () => {
  const { getByTestId, queryByTestId } = render(<Navbar />)

  // Initially, the menu should be closed
  expect(queryByTestId('menu')).toBeNull()

  const menuIcon = getByTestId('menu-button')
  fireEvent.click(menuIcon)

  // After clicking the menu icon, the menu should be open
  expect(getByTestId('menu')).toBeInTheDocument()

  fireEvent.click(menuIcon)

  // After clicking the menu icon again, the menu should be closed
  expect(queryByTestId('menu')).toBeNull()
})
