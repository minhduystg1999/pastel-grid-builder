import { act, fireEvent, render, waitFor } from "@testing-library/react-native";
import { COLORS } from "@/constants/colors";
import GridControls from "@/components/grid-controls";
import {
  DEBOUNCE_TIME,
  DEFAULT_COLOR,
  DEFAULT_GAP,
  DEFAULT_SIZE,
} from "@/constants/controls";

describe("Grid Controls", () => {
  const mockSetSize = jest.fn();
  const mockSetGap = jest.fn();
  const mockSetColor = jest.fn();
  const defaultProps = {
    size: DEFAULT_SIZE,
    gap: DEFAULT_GAP,
    color: DEFAULT_COLOR,
    setSize: mockSetSize,
    setGap: mockSetGap,
    setColor: mockSetColor,
  };

  it("should render correctly", () => {
    const { getByTestId } = render(<GridControls {...defaultProps} />);
    expect(getByTestId("grid-inputs-group")).toBeTruthy();
    expect(getByTestId("grid-color-picker-group")).toBeTruthy();
    expect(getByTestId("grid-reset-button-group")).toBeTruthy();
  });

  it("should update grid size input", async () => {
    const { getByPlaceholderText } = render(<GridControls {...defaultProps} />);
    const sizeInput = getByPlaceholderText("Enter grid size");

    fireEvent.changeText(sizeInput, "5");
    await waitFor(() => {
      expect(mockSetSize).toHaveBeenCalledWith(5);
    });
  });

  it("should NOT update size with non-numeric value", async () => {
    const { getByPlaceholderText } = render(<GridControls {...defaultProps} />);
    const sizeInput = getByPlaceholderText("Enter grid size");

    fireEvent.changeText(sizeInput, "abc");

    await waitFor(() => {
      expect(mockSetSize).not.toHaveBeenCalledWith("abc");
    });
  });

  it("should NOT update size with negative value", async () => {
    const { getByPlaceholderText } = render(<GridControls {...defaultProps} />);
    const sizeInput = getByPlaceholderText("Enter grid size");

    fireEvent.changeText(sizeInput, "-1");

    await waitFor(() => {
      expect(mockSetSize).not.toHaveBeenCalledWith(-1);
    });
  });

  it("should update grid gap input", async () => {
    const { getByPlaceholderText } = render(<GridControls {...defaultProps} />);
    const gapInput = getByPlaceholderText("Enter grid gap");

    fireEvent.changeText(gapInput, "15");
    await waitFor(() => {
      expect(mockSetGap).toHaveBeenCalledWith(15);
    });
  });

  it("should NOT update size with non-numeric value", async () => {
    const { getByPlaceholderText } = render(<GridControls {...defaultProps} />);
    const gapInput = getByPlaceholderText("Enter grid gap");

    fireEvent.changeText(gapInput, "abc");

    await waitFor(() => {
      expect(mockSetGap).not.toHaveBeenCalledWith("abc");
    });
  });

  it("should NOT update gap with negative value", async () => {
    const { getByPlaceholderText } = render(<GridControls {...defaultProps} />);
    const gapInput = getByPlaceholderText("Enter grid gap");

    fireEvent.changeText(gapInput, "-1");

    await waitFor(() => {
      expect(mockSetGap).not.toHaveBeenCalledWith(-1);
    });
  });

  it("should update the color when a new color is selected", () => {
    const { getByTestId } = render(<GridControls {...defaultProps} />);
    const colorPicker = getByTestId("color-picker");

    fireEvent.press(colorPicker);
    fireEvent.press(getByTestId(`color-option-${COLORS[2]}`));

    expect(mockSetColor).toHaveBeenCalledWith(`${COLORS[2]}`);
  });

  it("should reset all values when reset button is pressed", () => {
    const { getByTestId } = render(<GridControls {...defaultProps} />);
    const resetButton = getByTestId("reset-button");

    fireEvent.press(resetButton);

    expect(mockSetSize).toHaveBeenCalledWith(DEFAULT_SIZE);
    expect(mockSetGap).toHaveBeenCalledWith(DEFAULT_GAP);
    expect(mockSetColor).toHaveBeenCalledWith(DEFAULT_COLOR);
  });
});
