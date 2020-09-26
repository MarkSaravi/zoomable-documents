/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-use-before-define */
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// eslint-disable-next-line no-undef
test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Zoomable Article/i);
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument();
});
