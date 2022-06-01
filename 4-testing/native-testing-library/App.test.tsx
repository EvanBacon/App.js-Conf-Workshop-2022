import React from "react";
import { render } from "@testing-library/react-native";

import App from "./App";

test("Has changed the text in App.js", () => {
  const { queryByText } = render(<App />);

  expect(
    queryByText("Open up App.tsx to start working on your app!")
  ).toBeNull();
});

test("Has React Europe 2020 text", () => {
  const { queryByText } = render(<App />);

  expect(queryByText("React Europe 2020", { exact: false })).toBeTruthy();
});
