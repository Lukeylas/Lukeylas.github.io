<template>
  <nav-bar></nav-bar>
  <q-tab-panels v-model="settingsStore.tab">
    <q-tab-panel name="home" id="home">
      <home-panel></home-panel>
    </q-tab-panel>

    <q-tab-panel
      name="projects"
      id="projects"
      class="column items-center q-pa-sm"
    >
      <projects-panel></projects-panel>
    </q-tab-panel>

    <q-tab-panel name="about">
      <div class="text-h6">Movies</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup>
// Components
import NavBar from "./website/Navbar.vue";
import HomePanel from "./website/panels/Home.vue";
import ProjectsPanel from "./website/panels/Projects.vue";

// Data
import { useSettingsStore } from "../data/pinia/SettingsStore";
const settingsStore = useSettingsStore();
</script>

<style lang="scss" scoped>
// * home
#home {
  margin-top: 7.5vh;
  @media screen and (max-width: 500px) {
    padding: 0;
    margin-top: 0;
  }
}

// Mobile
@media only screen and (max-width: 1000px) {
  #projects {
    margin: 0;
    padding: 0;
  }
  #projectsContainer {
    width: 100%;
  }
  .projectButton {
    height: 150px;
  }
}
</style>
