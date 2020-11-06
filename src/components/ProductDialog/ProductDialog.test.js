import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProductDialog from "./ProductDialog";

test("should show dialog when open is true", () => {
  const props = {
    open: true,
  };
  const { getByRole } = render(<ProductDialog {...props} />);

  const modal = getByRole("dialog");
  expect(modal).toBeDefined();
});

test("should not show dialog when open is false", () => {
  const props = {
    open: false,
  };
  const { container } = render(<ProductDialog {...props} />);
  expect(container.children.length).toBe(0);
});

test("should close dialog on clicking close button", () => {
  const props = {
    open: true,
  };
  const onClose = jest.fn(() => {
    props.open = false;
  });
  const { getByRole } = render(<ProductDialog onClose={onClose} {...props} />);

  const closeButton = getByRole("button");

  fireEvent.click(closeButton);
  expect(onClose).toBeCalled();
});
