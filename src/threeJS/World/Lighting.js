import * as THREE from 'three'
import Experience from "../Experience";

export default class Lighting {
    constructor() {
        /**
         * Init
         */
        
        // Setup
        this.experience = new Experience();
        this.scene = this.experience.scene;

        // Add Lights
        this.ambientLight = this.newAmbientLight(); 

        this.topLight = this.newDirectionLight(new THREE.Vector3(0, 2, 4));
    }
    newAmbientLight() {
        const newLight = new THREE.AmbientLight('#ffffff', 0.5);
        this.scene.add(newLight);
        return newLight;
    }
    newDirectionLight(position) {
        const newLight = new THREE.DirectionalLight('#fffff2', 2);
        newLight.position.add(position);
        this.scene.add(newLight);
        return newLight;
    }
    dispose() {
        this.scene.remove(this.ambientLight);
        this.scene.remove(this.topLight);
    }
}