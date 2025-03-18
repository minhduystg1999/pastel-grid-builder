import { DraggableGrid } from "@mgcrea/react-native-dnd";
import "react-native-gesture-handler/jestSetup";

jest.mock("react-native-reanimated", () =>
  require("react-native-reanimated/mock")
);

jest.mock("react-native-gesture-handler", () => ({
  GestureHandlerRootView: ({ children }) => children,
}));

jest.mock("react-native-safe-area-context", () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    SafeAreaView: ({ children }) => children,
  };
});

jest.mock("@mgcrea/react-native-dnd", () => ({
  DndProvider: ({ children }) => children,
  DraggableGrid: ({ children }) => children,
  Draggable: ({ children }) => children,
}));

require("react-native-reanimated").setUpTests();
