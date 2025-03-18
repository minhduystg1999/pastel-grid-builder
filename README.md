# Pastel Grid Builder

A React Native application on a tablet that displays a pastel-colored grid. Users can configure grid parameters, pick a base color, and rearrange items via drag-and-drop

## Framework and libraries

- Expo 52.0.38
- React Native 0.76.7
- [@mgcrea/react-native-dnd](https://github.com/mgcrea/react-native-dnd)
- [chroma-js](https://github.com/gka/chroma.js)
- [react-native-size-matters](https://github.com/nirsky/react-native-size-matters/)

## Installation and run the application

1. **Installation**

   ```bash
   git clone https://github.com/minhduystg1999/pastel-grid-builder.git

   cd pastel-grid-builder

   yarn
   ```

2. **Run the application**

   ```bash
      yarn start
   ```

   then press i (for iOS) / a (for Android)

   OR

   ```bash
      yarn ios
   ```

   OR

   ```bash
      yarn android
   ```

3. **Testing**

   ```bash
      yarn test
   ```

## Additional Notes

1. **Design decision**

- I decided to keep the design simple instead of making it more fancy. Mostly because of the timespan I had and I prioritied the functional features first.

2. **Used libraries**

- [@mgcrea/react-native-dnd](https://github.com/mgcrea/react-native-dnd) supports the draggable grid and also based on **react-native-reanimated** and **react-native-gesture-handler**, both of which have smooth interaction and high performance.
- [chroma-js](https://github.com/gka/chroma.js) supports the pastel color generation.
- [react-native-size-matters](https://github.com/nirsky/react-native-size-matters/) for scaling and fit the design and screen components. For the simple design, this library helps reduce implementation time (but not ideal for project that need pitch perfect UI and responsive layouts)

3. **Challenges faced**:

- **Timeline**: I had used ~11 hours, more than I expected. There are still many tasks and things I want to do, especially about the UX (such as a full color picker or the toast to warning if user enter invalid input values...) and the UI.
- **Expo**: I'm not familliar with Expo latest version folder structure and app page route, so it was a bit time-consuming at first.
