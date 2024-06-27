<template>
    <main>
        <div class="row">
            <div class="col column items-center">
                <q-btn class="bigButton" @click="settingsStore.siteMode = '2D'">
                    <q-icon name="desktop_windows" size="15vh" id="leftIcon" />
                    <q-icon name="smartphone" size="15vh" id="rightIcon" />
                    <p class="text-h3 self-end q-pb-lg">2D/Website</p>
                </q-btn>
            </div>
            <div class="col column items-center">
                <q-btn class="bigButton" @click="settingsStore.siteMode = '3D'">
                    <q-icon name="videocam" size="15vh" id="leftIcon" />
                    <q-icon name="sports_esports" size="15vh" id="rightIcon" />
                    <p class="text-h3 self-end q-pb-lg">3D/Omgeving</p>
                </q-btn>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useSettingsStore } from '../../data/pinia/SettingsStore';

const settingsStore = useSettingsStore();
</script>

<style lang="scss" scoped>
// Main 
main {
    margin-top: 20vh;
    font-size: 5vh;
}
// Buttons
.bigButton {
    height: 50vh;
    width: 50vh;
    border: black solid 1vh;
    border-radius: 1vh;
    margin-left: 3vh;
    #leftIcon {
        rotate: -5deg;
        position: absolute;
        top: 20%;
        left: 15%;
    }
    #rightIcon {
        rotate: 5deg;
        position: absolute;
        top: 20%;
        right: 15%;
    }
    #text {
        position: absolute;
        bottom: 0;
    }
}
@keyframes leftIcon {
    0% {rotate: -5deg;}
    49% {rotate: -5deg;}
    51% {rotate: 5deg;}
    100% {rotate: 5deg}
}
@keyframes rightIcon {
    0% {rotate: 5deg;}
    49% {rotate: 5deg;}
    51% {rotate: -5deg;}
    100% {rotate: -5deg}
}
.bigButton:hover {
    #leftIcon {
        animation-name: leftIcon;
        animation-duration: 0.4s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
    }
    #rightIcon {
        animation-name: rightIcon;
        animation-duration: 0.4s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
    }
}
</style>