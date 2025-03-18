export interface IGridControlsProps {
  size: number;
  gap: number;
  color: string;
  setSize: (size: number) => void;
  setGap: (gap: number) => void;
  setColor: (color: string) => void;
}
