import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { DndProvider } from "@mgcrea/react-native-dnd";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { DEFAULT_COLOR, DEFAULT_GAP, DEFAULT_SIZE } from "@/constants/controls";
import GridControls from "@/components/grid-controls";
import GridLayout from "@/components/grid-layout";
import { NORMAL_PADDING } from "@/constants/measurements";

export default function HomeScreen() {
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [gap, setGap] = useState(DEFAULT_GAP);

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <DndProvider>
          <GridControls
            size={size}
            gap={gap}
            color={color}
            setSize={setSize}
            setGap={setGap}
            setColor={setColor}
          />
          <GridLayout color={color} size={size} gap={gap} />
        </DndProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: NORMAL_PADDING / 2,
    backgroundColor: "white",
  },
});
