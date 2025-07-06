export class CanvasNode {
  #x: number;
  #y: number;

  constructor(position?: { x: number; y: number }) {
    this.#x = position?.x ?? 0;
    this.#y = position?.y ?? 0;
  }

  get position() {
    return {
      x: this.#x,
      y: this.#y,
    };
  }

  set position(pos) {
    this.#x = pos.x;
    this.#y = pos.y ;
  }

  move(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }
}
