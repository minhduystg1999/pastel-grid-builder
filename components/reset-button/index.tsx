import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { IResetButtonProps } from "./types";
import {
  NORMAL_BORDER_RADIUS,
  NORMAL_FONT_SIZE,
  NORMAL_PADDING,
} from "@/constants/measurements";

const ResetButton: React.FC<IResetButtonProps> = ({ onReset }) => {
  return (
    <TouchableOpacity style={styles.resetButton} onPress={onReset}>
      <Text style={styles.resetText}>Reset</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  resetButton: {
    alignSelf: "center",
    backgroundColor: "white",
    paddingHorizontal: NORMAL_PADDING * 2,
    paddingVertical: NORMAL_PADDING,
    borderRadius: NORMAL_BORDER_RADIUS,
    borderWidth: 1,
    borderColor: "blue",
  },
  resetText: {
    color: "blue",
    fontSize: NORMAL_FONT_SIZE,
    fontWeight: "bold",
  },
});

export default ResetButton;
