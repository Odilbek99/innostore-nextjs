import { render, screen } from '@testing-library/react'
import Product from '../components/Product'

const product = {
  slug: {
    current: 'test-slug',
  },
  name: 'Test Product',
  price: 100,
  image: null,
}

test('renders FooterBanner component', () => {
  render(<Product product={product} />)

  const name = screen.getByText(product.name)
  expect(name).toBeInTheDocument()

  const price = screen.getByText('₽' + product.price)
  expect(price).toBeInTheDocument()
})
