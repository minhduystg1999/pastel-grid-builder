import { useMemo } from "react";
import { ObjectWithId } from "@mgcrea/react-native-dnd";
import uuid from "react-native-uuid";
import chroma from "chroma-js";
import { generatePastelColor } from "@/utils/color-utils";

export const useGridCalculation = (
  color: string,
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

  const pastelColors = useMemo(() => {
    return Array.from({ length: size * size }, (_, index) =>
      generatePastelColor(color, index, size * size)
    );
  }, [color, size]);

  const gridData = useMemo(
    () =>
      Array.from({ length: size * size }, (_, index) => ({
        id: uuid.v4().toString(),
        value: `${index + 1}`,
        color: pastelColors[index],
      })) satisfies ObjectWithId[],
    [size, pastelColors]
  );

  return { gridData, itemWidth, itemHeight };
};

export default useGridCalculation;
