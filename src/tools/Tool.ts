export default class Tool {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null = null;
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    if (canvas !== null) {
      this.ctx = canvas.getContext('2d');
    }
  }

  destroyEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }
}