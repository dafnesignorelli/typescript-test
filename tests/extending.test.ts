import { expect, it } from "vitest";



it("Should be able to move", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.position).toEqual({ x: 0, y: 0 });

  canvasNode.move(10, 20);

  expect(canvasNode.position).toEqual({ x: 10, y: 20 });
});

it("Should be able to receive an initial position", () => {
  const canvasNode = new CanvasNode({
    x: 10,
    y: 20,
  });

  expect(canvasNode.position).toEqual({ x: 10, y: 20 });
});

it("Should not be able to access x and y from the outside", () => {
  const canvasNode = new CanvasNode();

  expect(
    // @ts-expect-error
    canvasNode.x,
  ).toEqual(undefined);
  expect(
    // @ts-expect-error
    canvasNode.y,
  ).toEqual(undefined);
});

it('Should handle "hidden" view mode', () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.isVisible).toEqual(true);
  expect(canvasNode.isHidden).toEqual(false);
  expect(canvasNode.isSelected).toEqual(false);

  canvasNode.hide();

  expect(canvasNode.isVisible).toEqual(false);
  expect(canvasNode.isHidden).toEqual(true);
  expect(canvasNode.isSelected).toEqual(false);
});
