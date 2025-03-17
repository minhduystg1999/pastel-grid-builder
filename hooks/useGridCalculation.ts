import { useMemo } from "react";
import { ObjectWithId } from "@mgcrea/react-native-dnd";
import uuid from "react-native-uuid";

export const useGridCalculation = (
  size: number,
  gap: number,
  availableWidth: number,
  availableHeight: number
) => {
  const itemWidth = useMemo(
    () => (availableWidth - gap * size) / size,
    [size, gap, availableWidth]
  );

  const itemHeight = useMemo(
    () => (availableHeight - gap * size) / size,
    [size, gap, availableHeight]
  );

  const gridData = useMemo(
    () =>
      Array.from({ length: size * size }, (_, index) => ({
        id: uuid.v4().toString(),
        value: `${index + 1}`,
      })) satisfies ObjectWithId[],
    [size, gap]
  );

  return { gridData, itemWidth, itemHeight };
};

export default useGridCalculation;
