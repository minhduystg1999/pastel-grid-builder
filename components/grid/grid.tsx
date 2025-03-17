import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Draggable, DraggableGrid } from "@mgcrea/react-native-dnd";
import IGridProps from "./types";
import useGridCalculation from "@/hooks/useGridCalculation";
import uuid from "react-native-uuid";

const Grid: React.FC<IGridProps> = ({ color, size, gap }: IGridProps) => {
  const [gridViewKey, setGridViewKey] = useState(() => uuid.v4().toString());
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const { gridData, itemWidth, itemHeight } = useGridCalculation(
    size,
    gap,
    width,
    height
  );

  useEffect(() => {
    setGridViewKey(uuid.v4().toString());
  }, [size, gap]);

  return (
    <View
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        console.log(`📏 Available width: ${width}, height: ${height}`);
        setHeight(height);
        setWidth(width);
      }}
      style={styles.gridContainer}
    >
      <DraggableGrid
        key={gridViewKey}
        direction="row"
        size={size}
        gap={gap}
        style={styles.grid}
      >
        {gridData.map((item) => (
          <Draggable
            key={item.id}
            id={item.id}
            style={[
              styles.gridItem,
              {
                backgroundColor: color,
                width: itemWidth,
                height: itemHeight,
              },
            ]}
          ></Draggable>
        ))}
      </DraggableGrid>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "85%",
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
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

export default React.memo(Grid, (prevProps, nextProps) => {
  return (
    prevProps.color === nextProps.color &&
    prevProps.size === nextProps.size &&
    prevProps.gap === nextProps.gap
  );
});
