import React from "react";
import { StyleSheet } from "react-native";
import { Draggable } from "@mgcrea/react-native-dnd";
import { IGridProps } from "./types";
import { NORMAL_BORDER_RADIUS } from "@/constants/measurements";

const Grid: React.FC<IGridProps> = ({ id, color, width, height }) => {
  return (
    <Draggable
      id={id}
      style={[styles.item, { backgroundColor: color, width, height }]}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: NORMAL_BORDER_RADIUS,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
});

export default React.memo(Grid);
