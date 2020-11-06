import React from 'react';
import {
    render,
    waitForElement,
    screen,
    fireEvent,
} from "@testing-library/react";
import Home from './Home';

test('renders Home without error', () => {
    const { getByText } = render(<Home />);
    const titleElement = getByText(/Products/i);
    expect(titleElement).toBeInTheDocument();
});

test("should render Items list correctly", () => {
    const { getByTestId } = render(<Home />);
    const productsComponent = getByTestId("productList");
    expect(productsComponent).toBeInTheDocument();
});

test("should open dialog on clicking item", async () => {
    render(<Home />);
    const products = await waitForElement(() => screen.getAllByTestId("item"));
    fireEvent.click(products[0]);
    const modal = screen.getByTestId("modal");
    expect(modal).toBeDefined();
});
