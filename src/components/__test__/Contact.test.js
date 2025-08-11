import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact us page TestCases", () => {
  test("Should render contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should render button", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should render submit", () => {
    render(<Contact />);
    const button = screen.getByText("Say Hello");
    expect(button).toBeInTheDocument();
  });
});
