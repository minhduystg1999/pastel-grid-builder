import { useState, useEffect } from "react";
import { DEFAULT_COLOR, DEFAULT_GAP, DEFAULT_SIZE } from "@/constants/controls";
import useDebounce from "@/hooks/useDebounce";
import { DEBOUNCE_TIME } from "@/constants/controls";

export const useGridControls = (
  size: number,
  gap: number,
  color: string,
  setSize: (size: number) => void,
  setGap: (gap: number) => void,
  setColor: (color: string) => void
) => {
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

  return {
    sizeValue,
    setSizeValue,
    gapValue,
    setGapValue,
    handleReset,
  };
};
