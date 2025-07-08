
export type CanvasNodeType = {
  x: number;
  y: number;
};

export class CanvasNode {
  x = 0;
  y = 0;

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export const positionFromCanvasNode = (node: CanvasNodeType) => {
  return {
    x: node.x,
    y: node.y,
  };
};

export const positionFromCanvasNode2 = (node: CanvasNode) => {
  return {
    x: node.x,
    y: node.y,
  };
};
