import * as THREE from "three";
import Experience from "./Experience.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera {
  constructor() {
    /**
     * Options
     */
    this.position = new THREE.Vector3(0, 0, 0);
    this.fov = 60;
    this.near = 1;
    this.far = 150;

    /**
     * Setup
     */
    // Set Three Components
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    // Create camera instance
    this.setInstance();
    this.instance.position.set(0, 0, 0)
    this.setOrbitControls();

  }
  /**
   * Init
   */
  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      this.fov,
      this.sizes.width / this.sizes.height,
      this.near,
      this.far
    );
    // this.instance.lookAt(new THREE.Vector3(0, 1, 1))
    this.scene.add(this.instance);
  }
  /**
   * Change Controls
   */
  setOrbitControls() {
    // Set new Controls
    if (this.controls) {
      this.controls.dispose();
    }
    this.controls = new OrbitControls(this.instance, this.canvas);
    // set Options
    this.controls.enableDamping = true;
    this.controls.minDistance = 1;
    this.controls.maxDistance = 5;
    this.controls.minPolarAngle = Math.PI * 0.4;
    this.controls.maxPolarAngle = Math.PI * 0.6;
    this.controls.minAzimuthAngle = Math.PI * -0.2;
    this.controls.maxAzimuthAngle = Math.PI * 0.2;
  }
  update() {
    if (this.controls) {
        this.controls.update();
      }
  }
  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }
}
