import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Loading from '../persentation/components/Loading'

describe("loading component test", () => {
    it("should render loading", () => {
        render(<Loading />)
    })
})