<template>
    
  <section>
    <q-card id="context" class="scroll self-end">
      <q-card-header class="text-h3 q-ma-md">
        Hallo, ik ben Luke!
      </q-card-header>
      <q-separator />
      <q-card-section class="q-pa-none">
        <q-img
          class="lt-sm q-pa-none rounded-borders"
          width="100%"
          :src="'/images/homePicture.png'"
        />
      </q-card-section>
      <q-card-section>
        <p class="text-h5">
          Ik heb altijd al interesse gehad in game-development en design, <br />
          maar ik ben pas echt begonnen met programeren als keuzevak van mijn
          mbo ict-support opleiding.<br /><br />
          Hierna begon ik een 3 jarige software development opleiding waar ik
          mezelf echt vond in coderen.<br />
          daar kwam ik erachter hoe interresant de techniek achter het maken van
          software is.<br /><br />
          Ik houd van creatief zijn in coderen en problemen oplossen op de meest
          efficiente manier.
        </p>
      </q-card-section>
    </q-card>
  </section>
  <q-img
    class="fixed-bottom-right gt-xs"
    width="25%"
    height="90%"
    :src="'/images/homePicture.png'"
  />
</template>

<script setup></script>
    
<style lang="scss" scoped>
// * Home
@keyframes contextAnimation {
    from {margin-left: -75%;}
    to {margin-left: 0;}
}
#context {
    width: 75%;
    animation-name: contextAnimation;
    animation-duration: 0.5s;
}
#home {
    margin-top: 7.5vh;
}
// mobile
@media only screen and (max-width: 500px) {
    #home {
        padding: 0;
        margin-top: 0;
    }
    #context {
        width: 100%;
    }
}
</style>
