import { View, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";
import { IColorPickerProps } from "./types";
import { moderateScale } from "react-native-size-matters";
import {
  NORMAL_BORDER_RADIUS,
  NORMAL_BORDER_WIDTH,
  NORMAL_GAP,
} from "@/constants/measurements";

const ColorPicker: React.FC<IColorPickerProps> = ({ color, setColor }) => {
  return (
    <View style={styles.container}>
      {COLORS.map((col) => (
        <TouchableOpacity
          key={col}
          style={[styles.colorOption, { backgroundColor: col }]}
          onPress={() => setColor(col)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
    gap: NORMAL_GAP,
  },
  colorOption: {
    flex: 1,
    minHeight: moderateScale(40),
    borderColor: "grey",
    borderRadius: NORMAL_BORDER_RADIUS,
    borderWidth: NORMAL_BORDER_WIDTH / 2,
  },
});

export default ColorPicker;
