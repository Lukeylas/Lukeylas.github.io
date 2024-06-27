import * as THREE from 'three'
import Experience from './Experience.js';

export default class Renderer
{
    constructor()
    {
        /**
         * Options
         */
        this.backgroundColor = '#ebebeb';

        /**
         * Setup
         */
        // Set Three components
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.camera = this.experience.camera
        this.counter = 1;
        // Create Renderer instance
        this.setInstance()
    }
    setInstance()
    {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })
        this.instance.toneMapping = THREE.CineonToneMapping
        this.instance.toneMappingExposure = 1.75
        this.instance.setClearColor(this.backgroundColor)
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio);
        this.instance.shadowMap.enabled = true;
    }
    resize()
    {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }
    update()
    {
        this.instance.render(this.scene, this.camera.instance);
    }
}