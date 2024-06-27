
<template>
  <main v-if="settingsStore.siteMode === '2D'">
    <website class="content"></website>
  </main>
  <main v-else-if="settingsStore.siteMode === '3D'" class="q-pa-none q-ma-none">
    <threeEnvironment></threeEnvironment>
  </main>
  <main v-else>
    <Index></Index>
  </main>

  <div v-if="!settingsStore.mobile" id="logo" class="fixed-top z-top shadow-5" @click="settingsStore.siteMode = null">
    <img :src="logoPath" alt="Logo" @mouseenter="logoPath = '/images/highlightedLogo.png'" @mouseleave="logoPath = '/images/logo.png'">
  </div>
</template>

<script setup>
/**
 * Init
 */
// Vue
import { ref } from 'vue';
// Components
import Index from './components/Index.vue';
import website from './components/Website.vue';
import threeEnvironment from './components/ThreeEnvironment.vue';

// Data
import { useSettingsStore } from './data/pinia/SettingsStore';
const settingsStore = useSettingsStore();

// Variables
let logoPath = ref("./images/logo.png");

/**
 * Functions
 */
function changeMode(newMode) {
  settingsStore.siteMode = newMode;
}

function highlightLogo() {
  console.log('hover')
  
}

// Resize handling
function checkSize() {
  if (window.innerWidth < 1200) {
    settingsStore.mobile = true;
    settingsStore.siteMode = "2D"
  }
  else {
    settingsStore.mobile = false;
  }
}

window.addEventListener('resize', () => {
  console.log(window.innerWidth)
  checkSize();
});
checkSize();
</script>

<style scoped>
main {
  height: 100%;
  width: 100%;
}
#logo {
    width: 300px;
    border: black solid 0.3vw;
    border-top: none;
    border-radius: 0px 0px 0.5vw 0.5vw;
    margin: auto;
    background-color: white;
    img {
        width: inherit;
    }
}
#logo:hover {
  background-color: #f4f4f4;
  cursor: pointer;
  img {
    :src: url('images/highlightLogo.png');
  }
}
</style>
