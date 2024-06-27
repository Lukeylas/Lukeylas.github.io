import * as THREE from 'three';
import Experience from '../Experience';

export default class Project {
    constructor() {
        /**
         * Init
         */
        this.experience = new Experience();
        this.scene = this.experience.scene;

        // Create Object
        this.setGeometry();
        this.setMaterial();
        this.setInstance();
    }
    setGeometry() {
        this.geometry = new THREE.BoxGeometry(0.4, 2.8, 2);
    }
    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({
            color: 'black',
        })
    }
    setInstance() {
        this.instance = new THREE.Mesh(this.geometry, this.material);
    }
}