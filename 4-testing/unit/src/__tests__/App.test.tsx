import * as React from "react";
import { render } from "react-native-testing-library";
import App from "../App";

test("shows default text", () => {
  const { getByText } = render(<App />);

  expect(
    getByText("Open up App.tsx to start working on your app!")
  ).toBeTruthy();
});

it(`Platform.OS works as expected`, () => {
  expect(render(<App />).toJSON()).toMatchSnapshot();
});
