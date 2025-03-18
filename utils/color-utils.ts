import chroma from "chroma-js";

export const generatePastelColor = (
  color: string,
  index: number,
  totalCount: number
) => {
  if (totalCount <= 1) {
    return chroma(color).mix("white", 0.2).saturate(0.4).hex();
  }

  const fadeFactor = (index / (totalCount - 1)) * 0.3 + 0.2;
  return chroma(color).mix("white", fadeFactor).saturate(0.4).hex();
};
