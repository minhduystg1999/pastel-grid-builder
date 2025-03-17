import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Draggable, DraggableGrid } from "@mgcrea/react-native-dnd";
import IGridProps from "./types";
import useGridCalculation from "@/hooks/useGridCalculation";

const Grid = ({ color, size, gap }: IGridProps) => {
  const { gridData, itemSize } = useGridCalculation(size, gap);

  return (
    <View style={styles.gridContainer}>
      <DraggableGrid direction="row" size={size} gap={gap} style={styles.grid}>
        {gridData.map((item) => (
          <Draggable
            key={item.id}
            id={item.id}
            style={[
              styles.gridItem,
              {
                // TODO: create pastel color base on root color and item index
                backgroundColor: color,
                width: itemSize,
                height: itemSize,
              },
            ]}
          >
            <Text style={styles.text}>{item.value}</Text>
          </Draggable>
        ))}
      </DraggableGrid>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  gridItem: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default Grid;
