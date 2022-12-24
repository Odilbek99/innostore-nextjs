import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

test('renders Footer component', () => {
  render(<Footer />)
  const linkElement = screen.getByText(/2022 Inno Store All rights reserverd/i)
  expect(linkElement).toBeInTheDocument()
})

//check if the footer component has icons  AiFillInstagram and AiOutlineTwitter
test('footer component has icons', () => {
  render(<Footer />)
  const twitterIcon = screen.getByTestId('icons')
  expect(twitterIcon).toBeInTheDocument()
})
