import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact page Test Cases", () => {
  test("Should render contact component", () => {
    // render
    render(<Contact />);

    //querying
    const heading = screen.getByRole("heading");

    //Assersion
    expect(heading).toBeInTheDocument();
  });

  test("Should render button in contact component", () => {
    // render
    render(<Contact />);

    //querying
    const button = screen.getByRole("button");

    //Assersion
    expect(button).toBeInTheDocument();
  });

  it("should redner 2 inputs in contact component", () => {
    render(<Contact />);

    const inputs = screen.getAllByRole("textbox");

    expect(inputs).toHaveLength(2);
  });

  it("Should render button in contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });
});
