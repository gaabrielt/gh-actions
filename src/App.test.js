/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("should toggle react icon visibility", () => {
  render(<App />);
  const icon = screen.getByTestId("icon");

  expect(icon).toBeInTheDocument();

  const button = screen.getByRole("button");

  act(() => userEvent.click(button));

  expect(icon).not.toBeInTheDocument();
});
