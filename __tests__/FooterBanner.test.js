import { render, screen } from '@testing-library/react'
import FooterBanner from '../components/FooterBanner'

const footerBanner = {
  smallText: '2022 Inno Store All rights reserverd',
  midText: 'Privacy Policy',
  desc: 'Terms and Conditions',
  product: 'Product',
  buttonText: 'Tap',
  image: null,
}

test('renders FooterBanner component', () => {
  render(<FooterBanner footerBanner={footerBanner} />)

  const smallText = screen.getByText(footerBanner.smallText)
  expect(smallText).toBeInTheDocument()

  const midText = screen.getByText(footerBanner.midText)
  expect(midText).toBeInTheDocument()

  const desc = screen.getByText(footerBanner.desc)
  expect(desc).toBeInTheDocument()

  const buttonText = screen.getByText(footerBanner.buttonText)
  expect(buttonText).toBeInTheDocument()
})
