import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { InfoPopup } from '@/components'
import type * as ReactDom from 'react-dom'

// Mocking ReactDOM to avoid 'TypeError: (0 , _reactdom.preload) is not a function'
jest.mock('react-dom', () => ({
  ...jest.requireActual<typeof ReactDom>('react-dom'),
  preload: jest.fn(),
}))

// Mock popup data
// const props = {
//   title: 'Mock title',
//   type: 'none' as 'none',
//   description: 'Mock description',
//   backgroundImages: true,
//   onClose: () => console.log('Call mock function'),
// }

const props = {
  translate: {
    competitions: {
      title: 'Competitions',
      description: `We take part in national and 
      international robotics competitions such as 
      RoboCup, LARC and IRONcup.`,
    },
    research: {
      title: 'Research',
      description:
        'We do research in various problems in the field of robotics',
    },
    development: {
      title: 'Development',
      description: 'We develop the software and hardware of our robots',
    },
  },
  type: 'development' as const,
  onClose: () => console.log('Call mock function'),
}

// Test 1: render the InfoPopup without any errors
test('renders InfoPopup component', () => {
  render(<InfoPopup {...props} />)
})

// Test 2: render InfoPopup passing prop type other than 'none'
test('renders InfoPopup with type development', () => {
  const { getByTestId } = render(<InfoPopup {...props} />)

  const leftImage = getByTestId('left-img')
  const rightImage = getByTestId('right-img')

  expect(leftImage).toBeInTheDocument()
  expect(rightImage).toBeInTheDocument()
})

// Test 3: check if onClose() is called correctly
test('closes InfoPopup correctly', () => {
  let isCalled = false

  const handleOnClose = () => {
    isCalled = true
  }

  const { getByTestId } = render(
    <InfoPopup {...props} onClose={handleOnClose} />
  )

  const closeButton = getByTestId('close-button')

  fireEvent.click(closeButton)

  expect(isCalled).toBe(true)
})
