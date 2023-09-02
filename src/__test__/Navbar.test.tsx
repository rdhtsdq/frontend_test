import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '../persentation/components/Navbar'

describe("Navbar test", () => {
    it("should render navbar", () => {
        render(<Navbar />)
        expect(screen.getByText("Articles")).toBeInTheDocument()
    })
})