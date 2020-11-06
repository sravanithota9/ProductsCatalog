import React from "react";
import {
  render,
  screen,
  fireEvent
} from "@testing-library/react";
import ProductList from "./ProductList";

test("should render Items list correctly", () => {
  const items = [
    {
      id: 1,
      name: "ABC",
      price: 150,
      hero: {
        href: "https://testing-library.com/img/octopus-64x64.png",
      }
    },
    {
      id: 2,
      name: "ABC",
      price: 150,
      hero: {
        href: "https://testing-library.com/img/octopus-64x64.png",
      }
    }
  ]
  render(<ProductList products={items} />);
  const itemsComponents = screen.getAllByTestId("item")
  expect(itemsComponents.length).toBe(2);
});


test("should call handleSelect", () => {
  const items = [
    {
      id: 1,
      name: "ABC",
      price: 150,
      hero: {
        href: "https://testing-library.com/img/octopus-64x64.png",
      }
    },
    {
      id: 2,
      name: "ABC",
      price: 150,
      hero: {
        href: "https://testing-library.com/img/octopus-64x64.png",
      }
    }
  ]
  const onSelect = jest.fn();
  render(<ProductList products={items} onSelect={onSelect} />);
  const itemsComponents = screen.getAllByTestId("item")
  fireEvent.click(itemsComponents[0]);
  expect(onSelect).toHaveBeenCalled();
});