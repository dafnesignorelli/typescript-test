class CanvasNode extends Shape {
  #viewMode: ViewMode;

  constructor(options?: {  x: number; y: number; viewMode?: ViewMode }) {
    super(options);
    this.#viewMode = options?.viewMode ?? "visible";
  }

  hide() {
    this.#viewMode = "hidden";
  }

  get isHidden() {
    return this.#viewMode === "hidden";
  }

  get isSelected() {
    return this.#viewMode === "selected";
  }

  get isVisible() {
    return this.#viewMode === "visible";
  }
}
