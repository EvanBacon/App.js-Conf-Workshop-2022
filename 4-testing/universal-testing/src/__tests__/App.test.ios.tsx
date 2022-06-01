import * as React from "react";
import { render } from "react-native-testing-library";
import App from "../App";

test("shows ios text", () => {
  const { getByText } = render(<App />);

  expect(getByText("I'm running on iOS!")).toBeTruthy();
});

test("does not show web text", () => {
  const { queryByText } = render(<App />);

  expect(queryByText("I'm running on web!")).toBeFalsy();
});
