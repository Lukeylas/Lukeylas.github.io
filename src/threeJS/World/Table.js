import * as THREE from 'three';
import Experience from '../Experience';
export default class Table {
    constructor() {
        /**
         * Init
         */
        // Options
        this.modelPath = 'models/desk.gltf';
        // Setup
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.gltfLoader = this.experience.gltfLoader;
        this.textureLoader = this.experience.textureLoader;

        // Create Instance
        this.setGeometry();
        this.setMaterial();
        this.setInstance();
    }
    setGeometry() {
        this.geometry = new THREE.BoxGeometry(8, 1, 2);
    }
    setMaterial() {
        const texture = this.textureLoader.load('textures/tableTexture.png');
        this.material = new THREE.MeshStandardMaterial({ map: texture });
        console.log('loading');
    }
    setInstance() {
        this.gltfLoader.load(this.modelPath, (gltf) => {
            // Set table + position
            this.instance = gltf.scene;
            this.instance.position.y = -5;
            this.instance.position.z = -7;
            this.scene.add(this.instance);
            
            // Specify Important properties in class 
            this.startText = this.instance.getObjectByName('StartText');
            this.startText.visible = false;
            
            this.projectText = this.instance.getObjectByName('ProjectText');
        }, (event) => {
            console.log(event);
        });
    }
    dispose() {
        if (this.instance) {
            this.scene.remove(this.instance);
        }
    }
}