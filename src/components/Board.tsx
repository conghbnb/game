import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import "./Board.css";
import { Color, Shape } from "../types";

interface Cell {
  shape: Shape;
  color: Color;
  hidden: boolean;
}

const Board: React.FC = () => {
  const [cells, setCells] = useState<Cell[]>([]);

  useEffect(() => {
    const createdCells: Cell[] = [];
    const colors: Color[] = ["green", "red", "blue"];
    const shapes: Shape[] = ["circle", "square", "triangle"];

    function createRandomCell() {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      return { color: randomColor, shape: randomShape };
    }

    for (let i = 0; i < 8; i++) {
      const c = createRandomCell();
      createdCells.push({ ...c, hidden: true });
      createdCells.push({ ...c, hidden: true }); // Tạo một bản sao của hình này để tạo cặp
    }

    // xáo trộn mảng các hình đã tạo
    for (let i = createdCells.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [createdCells[i], createdCells[j]] = [createdCells[j], createdCells[i]];
    }

    setCells(createdCells);
  }, []);

  const handleCellClick = (index: number) => {
    const updateCellList = cells.map((cell, i) => {
      if (i === index) {
        return { ...cell, hidden: false };
      }
      return cell;
    });
    setCells(updateCellList);
  };

  return (
    <div className="board">
      {cells.map((cell, index) => (
        <div className="cell" key={`${index}-${cell.shape}-${cell.color}`}>
          <Cell
            shape={cell.shape}
            color={cell.color}
            hidden={cell.hidden}
            handleClick={() => handleCellClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Board;
