import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CountValue from "./CountValue";
import "@testing-library/jest-dom/vitest";

describe("CountValue Component", () => {
  it("should render the numeric value correctly", () => {
    render(<CountValue>2</CountValue>);
    const element = screen.getByText("2");
    expect(element).toBeInTheDocument();
  });
});
