import React from "react";
import "./Cell.css";
import { Circle } from "./Circle";
import { Triangle } from "./Triangle";
import { Square } from "./Square";
import { Color, Shape } from "../types";

interface CellProps {
  shape: Shape;
  color: Color;
  hidden: boolean;
  handleClick: () => void;
}

const Cell: React.FC<CellProps> = ({
  shape,
  color,
  hidden,
  handleClick,
}: CellProps) => {
  const shapes = {
    circle: <Circle color={color} />,
    triangle: <Triangle color={color} />,
    square: <Square color={color} />,
  };

  return hidden ? (
    <div className="empty-cell" onClick={handleClick}></div>
  ) : (
    shapes[shape]
  );
};

export default Cell;
