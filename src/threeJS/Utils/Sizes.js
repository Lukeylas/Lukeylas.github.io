import { EventDispatcher } from "three";

export default class Sizes extends EventDispatcher {
  constructor() {
    super();
    // Setup
    this.setWidth();
    this.setHeight();
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    // Resize event
    window.addEventListener("resize", () => {
      this.setWidth();
      this.setHeight();
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);
      this.dispatchEvent({ type: "resize", message: "Screen Resized!" });
    });
  }
  setWidth() {
    this.width = window.innerWidth;
  }
  setHeight() {
    this.height = window.innerHeight;
  }
}
