import '@testing-library/jest-dom/';
import { render, screen } from '@testing-library/react';
import MainContent from '../persentation/components/MainContent';

describe("MainContent", () => {
    it("renders without a title", () => {
        render(<MainContent>Hello, World!</MainContent>);

        expect(screen.queryByText("Title")).not.toBeInTheDocument();
        expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    });

    it("renders with a title", () => {
        render(<MainContent title="Sample Title">Hello, World!</MainContent>);

        // Expectations/assertions
        expect(screen.getByText("Sample Title")).toBeInTheDocument(); // Title should be present
        expect(screen.getByText("Hello, World!")).toBeInTheDocument(); // Children should be present
    });
});
