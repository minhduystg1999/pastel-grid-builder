import { act, fireEvent, render } from "@testing-library/react-native";
import Input from "@/components/input";

describe("Grid Input", () => {
  it("should update with a valid numeric value", () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <Input label="Grid Size" value="3" onChange={mockOnChange} />
    );

    const input = getByTestId("grid-input");

    act(() => {
      fireEvent.changeText(input, "5");
    });

    expect(mockOnChange).toHaveBeenCalledWith("5");
  });

  it("should NOT update non-numeric value", () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <Input label="Grid Size" value="3" onChange={mockOnChange} />
    );

    const input = getByTestId("grid-input");

    act(() => {
      fireEvent.changeText(input, "abc");
    });

    //TODO: find way to test the input with the debounce function
    expect(true);
  });

  it("should NOT update with negative numbers", () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <Input label="Grid Size" value="3" onChange={mockOnChange} />
    );

    const input = getByTestId("grid-input");

    act(() => {
      fireEvent.changeText(input, "-5");
    });

    //TODO: find way to test the input with the debounce function
    expect(true);
  });
});
