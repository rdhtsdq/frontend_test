import '@testing-library/jest-dom/'
import { render, screen } from '@testing-library/react'
import ArticleCard from '../persentation/components/ArticleCard'

test("Render Card", () => {
    render(<ArticleCard author={"Author"} title={"Title"} />)
    expect(screen.getByRole('paragraph'))
})

