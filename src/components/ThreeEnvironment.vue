<template>
    <canvas id="webgl" class="absolute-center"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import Experience from "../threeJS/Experience.js";

let experience = null;

onMounted(() => {
    const canvas = document.querySelector('canvas#webgl');
    if (window.experience) {
        window.experience.play(canvas);
    }
    else {
        experience = new Experience(canvas);
    }
});
onUnmounted(() => {
    window.experience.pause();
    experience = null;
})
</script>

<style lang="scss" scoped>
    
</style>