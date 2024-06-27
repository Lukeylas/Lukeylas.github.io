import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        siteMode: null,
        tab: 'home'
    })
});