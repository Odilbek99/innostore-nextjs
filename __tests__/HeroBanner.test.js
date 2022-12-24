import { render, screen } from '@testing-library/react'
import HeroBanner from '../components/HeroBanner'

const heroBanner = {
  smallText: 'small',
  midText: 'mid',
  largeText1: 'lg1',
  product: 'product',
  buttonText: 'button',
  desc: 'desc',
  image: null,
}

test('renders FooterBanner component', () => {
  render(<HeroBanner heroBanner={heroBanner} />)

  const smallText = screen.getByText(heroBanner.smallText)
  expect(smallText).toBeInTheDocument()

  const midText = screen.getByText(heroBanner.midText)
  expect(midText).toBeInTheDocument()

  const largeText1 = screen.getByText(heroBanner.largeText1)
  expect(largeText1).toBeInTheDocument()

  const buttonText = screen.getByText(heroBanner.buttonText)
  expect(buttonText).toBeInTheDocument()

  const desc = screen.getByText(heroBanner.desc)
  expect(desc).toBeInTheDocument()
})
