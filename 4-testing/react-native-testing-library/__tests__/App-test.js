import * as React from "react";
import { render, fireEvent } from "react-native-testing-library";
import App, { incrementCount } from "../App";

// Snapshot test
test("should render", () => {
  expect(render(<App />).toJSON()).toMatchSnapshot();
});

// Interact with a rendered component
test("should increase count on click", () => {
  const { getByTestId, getByText } = render(<App />);
  expect(getByTestId("counter").props.children).toEqual(0);
  fireEvent.press(getByText("Add one"));
  expect(getByTestId("counter").props.children).toEqual(1);
});

// Interact with an input
test("should increase count on input", () => {
  const { getByTestId, getByText } = render(<App />);
  expect(getByTestId("counter").props.children).toEqual(0);

  fireEvent.changeText(getByTestId("text-input"), 5);
  fireEvent.press(getByText("Add more"));

  expect(getByTestId("counter").props.children).toEqual(5);
});

// Test both work together
test("should increase count on input and button press", () => {
  const { getByTestId, getByText } = render(<App />);
  expect(getByTestId("counter").props.children).toEqual(0);

  fireEvent.changeText(getByTestId("text-input"), 5);
  fireEvent.press(getByText("Add more"));
  fireEvent.press(getByText("Add one"));

  expect(getByTestId("counter").props.children).toEqual(6);
});

// Use mocks to test that props are invoked correctly
test("should fire onCountIncreased callback", () => {
  let onCountIncreased = jest.fn();
  const { getByTestId, getByText } = render(
    <App onCountIncreased={onCountIncreased} />
  );
  fireEvent.press(getByText("Add one"));
  fireEvent.press(getByText("Add one"));
  expect(onCountIncreased).toHaveBeenCalledTimes(2);
  expect(onCountIncreased).toHaveBeenNthCalledWith(1, 1);
  expect(onCountIncreased).toHaveBeenNthCalledWith(2, 2);
});
