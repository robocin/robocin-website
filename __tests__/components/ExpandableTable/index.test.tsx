import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ExpandableTable } from '@/components'
import type * as ReactDom from 'react-dom'

// Mocking ReactDOM to avoid 'TypeError: (0 , _reactdom.preload) is not a function'
jest.mock('react-dom', () => ({
  ...jest.requireActual<typeof ReactDom>('react-dom'),
  preload: jest.fn(),
}))

// Mock table data
jest.mock(
  '../../../src/components/ExpandableTable/mockTableData',
  () => () => ({
    label: 'VSSL - Results',
    th: ['Year/Competition', 'LARC', 'IRONCup'],
    trs: [
      ['2021', '1º 3v3 RL', '1º'],
      ['2020', '4º DET, 5º RL', '3º RL, 5º DET'],
      ['2019', '4º DET, 5º RL', '3º RL'],
      ['2018', '3º', '3º'],
      ['2017', '5º', 'N/A'],
      ['2016', '16º', 'N/A'],
    ],
  })
)

// Test 1: Render the ExpandableTable without any errors
test('renders ExpandableTable component', () => {
  render(<ExpandableTable />)
})

// Test 2: expand and collapse the ExpandableTable correctly
test('expand the ExpandableTable component', () => {
  const { getByTestId } = render(<ExpandableTable />)

  const topBar = getByTestId('topbar')
  expect(topBar).toBeInTheDocument()

  // Expand the table
  fireEvent.click(topBar)

  // Check if the table renders
  const table = getByTestId('table')
  expect(table).toBeInTheDocument()

  // Collapse the table
  fireEvent.click(topBar)

  // Check if the table no longer renders
  expect(table).not.toBeInTheDocument()
})
