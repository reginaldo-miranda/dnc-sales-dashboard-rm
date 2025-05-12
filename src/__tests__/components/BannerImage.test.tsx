/* eslint-disable @typescript-eslint/no-unused-expressions */
import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import 'jest-styled-components'
import { BannerImage } from '../../components/BannerImage'
//import test from 'node:test'

test('renders BannerImage with correct style', () => {
  const { container } = render(<BannerImage />)
  expect(container.firstChild).toHaveStyleRule(
    'background',
    'url(/login-image.svg)'
  )

  expect(container.firstChild).toHaveStyleRule('background-size', 'cover')
  expect(container.firstChild).toHaveStyleRule('height', '100vh')
  expect(container.firstChild).toHaveStyleRule('width', '50vw')
})
