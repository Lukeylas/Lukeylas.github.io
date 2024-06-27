<template>
  <section id="projectsContainer">
    <q-intersection style="width: 100%" transition="scale">
      <div class="projectRow" :class="{ row: settingsStore.mobile === false }">
        <q-btn class="projectButton col-4"></q-btn>
        <q-btn class="projectButton col-4"></q-btn>
        <q-btn class="projectButton col-4"></q-btn>
      </div>
      <div class="projectRow" :class="{ row: settingsStore.mobile === false }">
        <q-btn class="projectButton col-4"></q-btn>
        <q-btn class="projectButton col-4"></q-btn>
        <q-btn class="projectButton col-4"></q-btn>
      </div>
      <div class="projectRow" :class="{ row: settingsStore.mobile === false }">
        <q-btn class="projectButton col-4"></q-btn>
        <q-btn class="projectButton col-4"></q-btn>
        <q-btn class="projectButton col-4"></q-btn>
      </div>
      <div class="projectRow" :class="{ row: settingsStore.mobile === false }">
        <q-btn class="projectButton col-4"></q-btn>
        <q-btn class="projectButton col-4"></q-btn>
        <q-btn class="projectButton col-4"></q-btn>
      </div>
      <div class="projectRow" :class="{ row: settingsStore.mobile === false }">
        <q-btn class="projectButton col-4"></q-btn>
        <q-btn class="projectButton col-4"></q-btn>
        <q-btn class="projectButton col-4"></q-btn>
      </div>
    </q-intersection>
  </section>
</template>

<script setup>
import { useSettingsStore } from "../../../data/pinia/SettingsStore";
const settingsStore = useSettingsStore();
</script>

<style lang="scss" scoped>
// * projects
#projects {
  margin-top: 10vh;
}
#projectsContainer {
  width: 100%;
  .row {
    height: 250px;
  }
}
.projectButton {
  width: 30%;
  height: 100%;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    margin: 0;
  }
}
</style>
