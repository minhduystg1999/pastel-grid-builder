import { render, fireEvent } from "@testing-library/react-native";
import { View } from "react-native";
import GridLayout from "@/components/grid-layout";

jest.mock("@/components/grid", () => {
  const { View } = require("react-native");
  return jest.fn(() => <View testID="grid-item" />);
});

describe("GridLayout Component", () => {
  const defaultProps = {
    color: "blue",
    size: 3,
    gap: 5,
  };

  it("should render correctly", () => {
    const { getByTestId } = render(<GridLayout {...defaultProps} />);
    expect(getByTestId("grid-layout")).toBeTruthy();
  });

  it("should generate the exact number of grid items", () => {
    const { getAllByTestId } = render(<GridLayout {...defaultProps} />);
    expect(getAllByTestId("grid-item").length).toBe(
      defaultProps.size * defaultProps.size
    );
  });

  it("should re-render when size, gap, or color changes", () => {
    const { rerender, getAllByTestId } = render(
      <GridLayout {...defaultProps} />
    );

    rerender(<GridLayout {...defaultProps} size={5} />);
    expect(getAllByTestId("grid-item").length).toBe(25);

    //TODO: find way to ensure the re-rendering is correct with gap and color
    rerender(<GridLayout {...defaultProps} gap={10} />);
    rerender(<GridLayout {...defaultProps} color="#123456" />);
  });

  //TODO: find way to test drag and drop grid
});
