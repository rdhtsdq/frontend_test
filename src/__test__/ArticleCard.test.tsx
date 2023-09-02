import '@testing-library/jest-dom/'
import { fireEvent, render, screen } from '@testing-library/react'
import ArticleCard from '../persentation/components/ArticleCard'


describe("Article Card Test", () => {
    it("render default value", () => {

        render(<ArticleCard />)
        expect(screen.getByText("Untitled")).toBeInTheDocument()
        expect(screen.getByText("Unknown")).toBeInTheDocument()
    })

    it("render with filled props", () => {
        render(<ArticleCard author={"Author"} title={"Title"} />)

        expect(screen.getByText("Author")).toBeInTheDocument()
        expect(screen.getByText("Title")).toBeInTheDocument()
    })

    it("test function props", () => {
        const onClickFunction = jest.fn()

        render(<ArticleCard onClick={onClickFunction} />)

        const card = screen.getByTestId("article-card")

        fireEvent.click(card)

        expect(onClickFunction).toHaveBeenCalled()
    })

})

