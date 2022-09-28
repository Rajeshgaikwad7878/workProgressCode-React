import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";
import userEvent from "@testing-library/user-event";

describe("Welcome component", () => {
  test("renders welcome Rajesh as a text", () => {
    //Arrange
    render(<Welcome />);

    //Act
    //Nothing

    //Assert
    const welcomeRajesh = screen.getByText("Welcome Rajesh");
    expect(welcomeRajesh).toBeInTheDocument();
  });

  test("renders Happy to see you if button Not clicked", () => {
    render(<Welcome />);
    const outputPara = screen.getByText(" Happy to see you", { exact: false });
    expect(outputPara).toBeInTheDocument();
  });

  test('renders "Text changed!" if button was clicked', () => {
    //Arrange
    render(<Welcome />);

    //Act
    const textChangeButton = screen.getByRole("button");
    userEvent.click(textChangeButton);

    //Assert
    const outputPara = screen.getByText("Text changed!");
    expect(outputPara).toBeInTheDocument();
  });

  test('does not renders "Happy to see you" if button was clicked', () => {
    //Arrange
    render(<Welcome />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputPara = screen.queryByText("Happy to see you", {
      expect: false,
    });
    expect(outputPara).toBeNull();
  });
});
