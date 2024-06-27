import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/Addons.js";

/**
 * My Classes
 */
import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import World from "./World/World.js";
import Cursor from "./Cursor.js";

/** init instance */
let instance = null;

export default class Experience {
  constructor(canvas) {
    /**
     * Setup
     */
    /** Return existing instance */
    if (instance) {
      return instance;
    }
    /** Create new instance */
    instance = this;
    window.experience = this;
    this.canvas = canvas;

    /** Loaders */
    this.textureLoader = new THREE.TextureLoader();
    this.gltfLoader = new GLTFLoader();

    /** My Classes */
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();
    this.cursor = new Cursor();

    // Shader shit
    // THREE.ColorManagement.legacyMode = false;
    // const target = new THREE.WebGLRenderTarget(this.sizes.width, this.sizes.height, {
    //   type: THREE.HalfFloatType,
    //   format: THREE.RGBAFormat,
    //   encoding: THREE.sRGBEncoding,
    // })
    // this.composer = new EffectComposer(this.renderer.instance, target);
    // this.composer.addPass(new RenderPass(this.scene, this.camera.instance));
    // this.composer.addPass(new ShaderPass(GammaCorrectionShader));
    // this.composer.addPass(new UnrealBloomPass(undefined, 1, 1, 1));



    /**
     * Events
     */
    this.time.addEventListener("tick", (event) => {
      this.update();
    });
    this.sizes.addEventListener("resize", (event) => {
      this.resize();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }
  update() {
    this.renderer.update();
    this.camera.update();
  }
  pause() {
    this.time.pause();
    this.camera.controls.dispose();
    this.renderer.instance.dispose();
    this.world.dispose();
  }
  play(newCanvas) {
    this.canvas = newCanvas
    this.time.play();
    this.camera = new Camera();
    console.log('new')
    this.renderer = new Renderer();
    this.world.reset();
  }
}
