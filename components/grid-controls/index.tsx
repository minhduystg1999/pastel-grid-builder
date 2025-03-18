import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { IGridControlsProps } from "./types";
import {
  DEBOUNCE_TIME,
  DEFAULT_COLOR,
  DEFAULT_GAP,
  DEFAULT_SIZE,
} from "@/constants/controls";
import {
  NORMAL_GAP,
  NORMAL_MARGIN,
  NORMAL_PADDING,
} from "@/constants/measurements";
import useDebounce from "@/hooks/useDebounce";
import ResetButton from "@/components/reset-button";
import Input from "@/components/input";
import ColorPicker from "@/components/color-picker";

const GridControls: React.FC<IGridControlsProps> = ({
  size,
  gap,
  color,
  setSize,
  setGap,
  setColor,
}) => {
  const [sizeValue, setSizeValue] = useState(size.toString());
  const [gapValue, setGapValue] = useState(gap.toString());

  const debounceSize = useDebounce(sizeValue, DEBOUNCE_TIME);
  const debounceGap = useDebounce(gapValue, DEBOUNCE_TIME);

  useEffect(() => {
    const newSize = parseInt(debounceSize, 10);
    if (!isNaN(newSize) && newSize > 0) setSize(newSize);
  }, [debounceSize]);

  useEffect(() => {
    const newGap = parseInt(debounceGap, 10);
    if (!isNaN(newGap) && newGap >= 0) setGap(newGap);
  }, [debounceGap]);

  const handleReset = () => {
    setSize(DEFAULT_SIZE);
    setGap(DEFAULT_GAP);
    setColor(DEFAULT_COLOR);
    setSizeValue(DEFAULT_SIZE.toString());
    setGapValue(DEFAULT_GAP.toString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.controlGroup}>
        <Input label="Grid Size" value={sizeValue} onChange={setSizeValue} />
        <Input label="Grid Gap" value={gapValue} onChange={setGapValue} />
      </View>

      <View style={styles.controlGroup}>
        <ColorPicker color={color} setColor={setColor} />
      </View>

      <View style={styles.controlGroup}>
        <ResetButton onReset={handleReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: NORMAL_PADDING,
    marginBottom: NORMAL_MARGIN / 2,
  },
  controlGroup: {
    flexDirection: "row",
    gap: NORMAL_GAP,
    marginVertical: NORMAL_MARGIN / 2,
  },
});

export default GridControls;
