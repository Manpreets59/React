import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact us page TestCases", () => {

  // beforeAll(() => {
  //   console.log("before all test cases");
  // })
  // beforeEach(() => {
  //   console.log("before each test case");
  // })

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
