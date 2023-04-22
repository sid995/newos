import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import 'jest-styled-components'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /NewOS/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
