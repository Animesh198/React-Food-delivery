import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test block", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should have placeholder inside contact component", () => {
    render(<Contact />);
    const placeholder = screen.getByPlaceholderText("name");
    expect(placeholder).toBeInTheDocument();
  });
});
