import * as THREE from 'three';
import Experience from "../Experience.js";
import Table from "./Table.js";
import Lighting from "./Lighting.js";
import Project from "./Project.js";

export default class World {
    constructor() {
        /**
         * Init
         */
        // Setup
        this.experience = new Experience();
        this.scene = this.experience.scene;

        // Add Objects
        this.table = new Table();
        this.lighting = new Lighting();

        this.projectsGroup = new THREE.Group();
        this.scene.add(this.projectsGroup);
        this.project1 = new Project();
        this.project1.instance.name = 'Project1';
        this.projectsGroup.add(this.project1.instance);
        this.projectsGroup.position.set(-9, -0.2, -9.4);
    }
    dispose()
    {
        this.table.dispose();
        this.lighting.dispose();
    }
    reset() {
        this.table = new Table();
        this.lighting = new Lighting();
    }
}