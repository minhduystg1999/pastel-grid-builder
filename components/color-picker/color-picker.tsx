import { View, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

interface ColorPickerProps {
  color: string;
  setColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, setColor }) => {
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
    justifyContent: "center",
    paddingVertical: 10,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginHorizontal: 20,
    borderColor: "black",
    borderWidth: 3,
  },
});

export default ColorPicker;
