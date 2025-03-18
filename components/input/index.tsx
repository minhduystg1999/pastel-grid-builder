import { View, Text, TextInput, StyleSheet } from "react-native";
import { IInputProps } from "./types";
import {
  NORMAL_BORDER_RADIUS,
  NORMAL_BORDER_WIDTH,
  NORMAL_FONT_SIZE,
  NORMAL_PADDING,
} from "@/constants/measurements";

const Input: React.FC<IInputProps> = ({ label, value, onChange }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        keyboardType="numeric"
        onChangeText={onChange}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
  label: {
    fontSize: NORMAL_FONT_SIZE,
  },
  input: {
    textAlign: "left",
    borderColor: "gray",
    borderWidth: NORMAL_BORDER_WIDTH / 2,
    fontSize: NORMAL_FONT_SIZE,
    paddingVertical: NORMAL_PADDING / 2,
    paddingHorizontal: NORMAL_PADDING,
    borderRadius: NORMAL_BORDER_RADIUS,
  },
});

export default Input;
