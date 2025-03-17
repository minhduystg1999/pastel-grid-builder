import { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import useDebounce from "@/hooks/useDebounce";

const GridControls: React.FC<IGridControlsProps> = ({
  size,
  gap,
  setSize,
  setGap,
}) => {
  const [sizeValue, setSizeValue] = useState(size.toString());
  const [gapValue, setGapValue] = useState(gap.toString());

  const debounceSize = useDebounce(sizeValue, 200);
  const debounceGap = useDebounce(gapValue, 200);

  useEffect(() => {
    const newSize = parseInt(debounceSize, 10);
    if (!isNaN(newSize) && newSize > 0) setSize(newSize);
  }, [debounceSize]);

  useEffect(() => {
    const newGap = parseInt(debounceGap, 10);
    if (!isNaN(newGap) && newGap >= 0) setGap(newGap);
  }, [debounceGap]);

  return (
    <View style={styles.container}>
      <View style={styles.controlGroup}>
        <Text>Grid Size</Text>
        <TextInput
          style={styles.input}
          value={sizeValue}
          keyboardType="numeric"
          onChangeText={setSizeValue}
          placeholder="Enter size"
        />
      </View>

      <View style={styles.controlGroup}>
        <Text>Grid Gap</Text>
        <TextInput
          style={styles.input}
          value={gapValue}
          keyboardType="numeric"
          onChangeText={setGapValue}
          placeholder="Enter gap"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  controlGroup: {
    flex: 1,
    marginHorizontal: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    marginTop: 4,
    width: "100%",
    textAlign: "left",
    borderRadius: 8,
  },
});

export default GridControls;
