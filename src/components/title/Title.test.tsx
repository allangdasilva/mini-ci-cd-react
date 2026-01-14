import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Title from "./Title";
import "@testing-library/jest-dom/vitest";

describe("CountButton Component", () => {
  it("the value should come from the children", () => {
    render(<Title>Counter App</Title>);
    const element = screen.getByText("Counter App");
    expect(element).toBeInTheDocument();
    expect(element).toHaveRole("heading");
  });
});
