import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { DndProvider } from "@mgcrea/react-native-dnd";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Grid from "@/components/grid/grid";
import GridControls from "@/components/grid-controls/grid-controls";
import ColorPicker from "@/components/color-picker/color-picker";

export default function HomeScreen() {
  const [color, setColor] = useState("blue");
  const [size, setSize] = useState(3);
  const [gap, setGap] = useState(10);

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <DndProvider>
          <GridControls
            size={size}
            gap={gap}
            setSize={setSize}
            setGap={setGap}
          />
          <ColorPicker color={color} setColor={setColor} />
          <Grid color={color} size={size} gap={gap} />
        </DndProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});
