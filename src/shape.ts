type ViewMode = "hidden" | "visible" | "selected";

class Shape {
  #x: number;
  #y: number;

  constructor(options?: { x: number; y: number; viewMode?: ViewMode }) {
    this.#x = options?.x ?? 0;
    this.#y = options?.y ?? 0;
  }

  get position() {
    return {
      x: this.#x,
      y: this.#y,
    };
  }

  move(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }
}
