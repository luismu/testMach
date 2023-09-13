import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import App from "./App"; // Adjust the path as needed

import renderer from "react-test-renderer";
// Import react-test-renderer
import "@testing-library/jest-dom/extend-expect";

afterEach(() => {
  cleanup();
});

test("renders the Find Pairs with Sum title", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Find Pairs with Sum/i);
  expect(titleElement).toBeInTheDocument();
});

test('finds pairs when "Find Pairs" button is clicked', () => {
  const { getByLabelText, getByText } = render(<App />);
  const numberListInput = getByLabelText(
    "Enter a comma-separated list of numbers:"
  );
  const targetSumInput = getByLabelText("Enter the target sum:");
  const findPairsButton = getByText("Find Pairs");

  fireEvent.change(numberListInput, { target: { value: "1,2,3,4,5,6" } });
  fireEvent.change(targetSumInput, { target: { value: "7" } });
  fireEvent.click(findPairsButton);

  expect(screen.getByText("Pairs that sum up to 7")).toBeInTheDocument();
  expect(screen.getByText("+ 1, 6")).toBeInTheDocument();
  expect(screen.getByText("+ 2, 5")).toBeInTheDocument();
  expect(screen.getByText("+ 3, 4")).toBeInTheDocument();
});
