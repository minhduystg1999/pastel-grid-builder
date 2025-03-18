import React, { useEffect, useState } from "react";
import { View, StyleSheet, LayoutChangeEvent } from "react-native";
import { DraggableGrid } from "@mgcrea/react-native-dnd";
import { IGridLayoutProps } from "./types";
import uuid from "react-native-uuid";
import useGridCalculation from "@/hooks/useGridCalculation";
import Grid from "@/components/grid";

const GridLayout: React.FC<IGridLayoutProps> = ({
  color,
  size,
  gap,
}: IGridLayoutProps) => {
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

  const onLayoutCallback = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    if (width > 0 && height > 0) {
      setWidth(width);
      setHeight(height);
    }
  };

  return (
    <View onLayout={onLayoutCallback} style={styles.gridContainer}>
      <DraggableGrid
        key={gridViewKey}
        direction="row"
        size={size}
        gap={gap}
        style={styles.grid}
      >
        {gridData.map((item) => (
          <Grid
            key={item.id}
            id={item.id}
            color={color}
            width={itemWidth}
            height={itemHeight}
          />
        ))}
      </DraggableGrid>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default React.memo(GridLayout, (prevProps, nextProps) => {
  return (
    prevProps.color === nextProps.color &&
    prevProps.size === nextProps.size &&
    prevProps.gap === nextProps.gap
  );
});
