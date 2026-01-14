import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CountButton from "./CountButton";
import "@testing-library/jest-dom/vitest";

describe("CountButton Component", () => {
  it("the value should come from the children", () => {
    render(<CountButton>Increment</CountButton>);
    const element = screen.getByText("Increment");
    expect(element).toBeInTheDocument();
  });
});
