import React from "react";
import { StyleSheet } from "react-native";
import { DndProvider } from "@mgcrea/react-native-dnd";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Grid from "@/components/grid/grid";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <DndProvider>
          {/* TODO: use state to handle instead of hardcode */}
          <Grid color={"blue"} size={5} gap={10} />
        </DndProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
