import { describe, expect, it } from "vitest";
import { CanvasNode, positionFromCanvasNode } from "../src/derivingTypes";

describe("positionFromCanvasNode", () => {
  it("Should return the position of the node", () => {
    const canvasNode = new CanvasNode();

    expect(positionFromCanvasNode(canvasNode)).toEqual({ x: 0, y: 0 });

    canvasNode.move(10, 20);

    expect(positionFromCanvasNode(canvasNode)).toEqual({ x: 10, y: 20 });
  });
});
