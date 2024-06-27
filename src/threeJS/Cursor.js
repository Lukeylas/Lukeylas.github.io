import * as THREE from "three";
import Experience from "./Experience";
import Project from "./World/Project";

export default class Cursor {
  constructor() {
    /**
     * Init
     */
    // Setup
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.camera = this.experience.camera;
    this.world = this.experience.world;

    this.position = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();

    window.addEventListener("mousemove", (event) => {
      // Cast ray
      this.position.x = (event.clientX / this.sizes.width) * 2 - 1;
      this.position.y = -(event.clientY / this.sizes.height) * 2 + 1;
      
      this.raycaster.setFromCamera(this.position, this.camera.instance);
      this.intersectObjects = this.raycaster.intersectObjects(
        this.scene.children,
        true
      );

      const highlightedObject = this.intersectObjects[0].object;
      // Check for Hovers
      if (this.world.table.instance) {
        if(highlightedObject.name.includes('Project')) {
          this.world.table.projectText.material.color.set('#12e8c0');
          this.currentHighlight = 'Projects';
        }
        else {
          this.world.table.projectText.material.color.set('#ffffff');
          this.currentHighlight = null;
        }
      }
    });
    window.addEventListener("pointerdown", (event) => {
      if (this.currentHighlight = 'Project') {
        console.log(event)
        this.camera.controls.dispose();
        this.camera.controls = null;
        this.camera.instance.position.set(-6, 0, -2)
        this.camera.instance.lookAt(-6, 0, -3);
      }
      else {
        this.camera.instance.position.set(0, 0, 0)
        this.camera.instance.lookAt(0, 1, 0);
        this.camera.setOrbitControls();
        this.world.table.startText.visible = true
      }
      const highlightedObject = this.intersectObjects[0].object;
    });
  }
}
