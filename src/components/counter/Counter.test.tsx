import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
import "@testing-library/jest-dom/vitest";

describe("Counter Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("the increment button should add 1 to count", async () => {
    render(<Counter />);
    const button = screen.getByRole("button", { name: "Increment" });
    const count = screen.getByText("0");

    await userEvent.click(button);

    expect(count.textContent).toEqual("1");
  });

  it("the decrement button should remove 1 to count", async () => {
    render(<Counter />);
    const button = screen.getByRole("button", { name: "Decrement" });
    const count = screen.getByText("0");

    await userEvent.click(button);

    expect(count.textContent).toEqual("-1");
  });
});
