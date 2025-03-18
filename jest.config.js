module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|expo-modules-core|@expo|expo|@react-native|@react-native-community|react-native-reanimated|@mgcrea/react-native-dnd|react-native-size-matters)/)",
  ],
  setupFiles: ["<rootDir>/jest.setup.js"],
};
