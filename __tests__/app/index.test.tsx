import { render } from "@testing-library/react-native";
import HomeScreen from "@/app/index";

describe("Home Screen", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId("grid-controls")).toBeTruthy();
    expect(getByTestId("grid-layout")).toBeTruthy();
  });
});
