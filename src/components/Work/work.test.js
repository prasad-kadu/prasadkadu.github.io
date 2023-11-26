import React from "react";
import { render, screen } from "@testing-library/react";
import Work from "./work.js";

test("renders Work component", () => {
  render(<Work />);
  expect(screen.getAllByText()).toHaveLength(7);
});
