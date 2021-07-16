import React from "react";
import { render } from "@testing-library/react";
import { PrimaryButton, SecondaryButton } from "./button.composition";

it("should render primary button with the correct text", () => {
  const testTitle = "Button Title";
  const { getByText } = render(<PrimaryButton title={testTitle} />);
  const rendered = getByText(testTitle);
  expect(rendered).toBeTruthy();
});

it("should render secondary button with the correct text", () => {
  const testTitle = "Button Title";
  const { getByText } = render(<SecondaryButton title={testTitle} />);
  const rendered = getByText(testTitle);
  expect(rendered).toBeTruthy();
});
