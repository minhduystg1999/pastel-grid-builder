import { useMemo } from "react";
import { Dimensions } from "react-native";
import { ObjectWithId } from "@mgcrea/react-native-dnd";
import uuid from "react-native-uuid";

export const useGridCalculation = (size: number, gap: number) => {
  const screenWidth = Dimensions.get("window").width;

  const itemSize = useMemo(
    () => (screenWidth - gap * size) / size,
    [size, gap, screenWidth]
  );

  const gridData = useMemo(
    () =>
      Array.from({ length: size * size }, (_, index) => ({
        id: uuid.v4().toString(),
        value: `${index + 1}`,
      })) satisfies ObjectWithId[],
    [size, gap]
  );

  return { gridData, itemSize };
};

export default useGridCalculation;
