export class CanvasNode {
    // typescript solution: write keyword private
    private x: number;
    private y: number;

    // Javasript solution: write # before variable

     #x2: number;
     #y2: number;
  
    constructor(position?: { x: number; y: number }) {
      this.x = position?.x ?? 0;
      this.y = position?.y ?? 0;
      this.#x2 = position?.x ?? 0;
      this.#y2 = position?.y ?? 0;
    }
  
    get position() {
      return {
        x: this.x,
        y: this.y,
      };
    }
  
    move(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }