<template>
    <nav v-if="settingsStore.mobile" style="border-bottom: 2px solid; height: 60px;" class="row bg-white rounded-borders shadow-4 z-top">
        <q-btn v-if="!sideBar" flat round dense icon="menu" @click="sideBar = true" />
        <q-btn v-else icon="close" flat round dense @click="sideBar = false" />
        <q-space></q-space>
        <img :src="'images/logo.png'"  height="100%"/>
    </nav>
    <nav class="z-top" v-else>
        <div class="row menu">
            <div class="col column bg-white nav-items left">
                <ul class="q-ml-sm q-pt-sm">
                    <li style="margin-right: 6vw;"  :class="{ selected: settingsStore.tab === 'home' }" @click="settingsStore.tab = 'home'">Home</li>
                    <li :class="{ selected: settingsStore.tab === 'projects' }" @click="settingsStore.tab = 'projects'">Projects</li>
                </ul>
            </div>
            <div class="col column bg-white nav-items right q-pt-sm">
                <ul class="self-end q-mr-lg">
                    <li :class="{ selected: settingsStore.tab === 'about' }" @click="settingsStore.tab = 'about'" >About</li>
                    <li :class="{ selected: settingsStore.tab === 'contact' }" @click="settingsStore.tab = 'contact'" style="margin-left: 6vw;" >Contact</li>
                </ul>
            </div>
        </div>
    </nav>
    <q-dialog v-model="sideBar" :position="'left'" full-height class="sideBar">
      <q-card class="q-pt-lg q-pr-xl">
        <ul @click="sideBar = false">
            <li :class="{ selected: settingsStore.tab === 'home' }" @click="settingsStore.tab = 'home'">Home</li>
            <li :class="{ selected: settingsStore.tab === 'projects' }" @click="settingsStore.tab = 'projects'">Projects</li>
            <li :class="{ selected: settingsStore.tab === 'about' }" @click="settingsStore.tab = 'about'" >About</li>
            <li :class="{ selected: settingsStore.tab === 'contact' }" @click="settingsStore.tab = 'contact'">Contact</li>
        </ul>
      </q-card>
    </q-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useSettingsStore } from '../../data/pinia/SettingsStore';
const settingsStore = useSettingsStore();
const sideBar = ref(false);
</script>

<style lang="scss" scoped>
// * NavBar
@keyframes navEnter {
    from {
        margin-top: -7%;
    }
    to {
        margin-top: 0
    }
}
nav {
    position: sticky;
    top: 0;
    width: 100%;
    font-family: 'Cooper Black', serif;
    
}
#menu {
    border-bottom: black solid 0.5vh;
    height: 13vh;
}

// * NavItems
.nav-items {
    border-bottom: black solid 0.5vh;
    ul {
        list-style-type: none;
        margin-top: 1.5vh;
        li {
            float: left;
            font-size: 50px;
            cursor: pointer;
        }
        li:hover {
            color: #12e8c0;
            -webkit-text-stroke: 0.3vh black;
        }
    }
    animation-name: navEnter;
    animation-duration: 1.5s;
}

// Mobile ^^
.sideBar {
   border: black 4px solid;
   ul {
    list-style-type: none;
    font-family: 'Cooper Black', serif;
    font-size: 5vh;
    li {
            cursor: pointer;
        }
        li:hover {
            color: #12e8c0;
            -webkit-text-stroke: 0.3vh black;
        }
   } 
}

.selected {
    color: #12e8c0;
    -webkit-text-stroke: 0.2vh black;
}

.left {
    border-radius: 0 0 0 0.5em;
}

.right {
    border-radius: 0 0 0.5em 0;

}


// * 3D/2D
#modeSwitch {
    position: absolute;
    top: 90%;
    right: 1%;
    width: 5vw;
    height: 5vw;
    border: black 0.3vw solid;
    border-radius: 0.5vw;
}
</style>