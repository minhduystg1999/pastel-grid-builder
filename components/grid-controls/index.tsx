import { View, StyleSheet } from "react-native";
import { IGridControlsProps } from "./types";
import {
  NORMAL_GAP,
  NORMAL_MARGIN,
  NORMAL_PADDING,
} from "@/constants/measurements";
import ResetButton from "@/components/reset-button";
import Input from "@/components/input";
import ColorPicker from "@/components/color-picker";
import { useGridControls } from "@/hooks/useGridControls";

const GridControls: React.FC<IGridControlsProps> = ({
  size,
  gap,
  color,
  setSize,
  setGap,
  setColor,
}) => {
  const { sizeValue, setSizeValue, gapValue, setGapValue, handleReset } =
    useGridControls(size, gap, color, setSize, setGap, setColor);

  return (
    <View style={styles.container} testID="grid-controls">
      <View style={styles.controlGroup} testID="grid-inputs-group">
        <Input label="Grid Size" value={sizeValue} onChange={setSizeValue} />
        <Input label="Grid Gap" value={gapValue} onChange={setGapValue} />
      </View>

      <View style={styles.controlGroup} testID="grid-color-picker-group">
        <ColorPicker color={color} setColor={setColor} />
      </View>

      <View style={styles.controlGroup} testID="grid-reset-button-group">
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
