import {defineStore} from "pinia";

export const useMainViewStore = defineStore({
    id: "mainView",
    state: () => ({
        options: [
            {
                label: 'Customer & Admin'
            },
            {
                label: 'Admin'
            },
            {
                label: 'Customer',
            }
        ],
        viewMode: 'Customer & Admin'
    }),
    getters: {
    },
    actions: {
        setViewMode(mode:string) {
            this.viewMode = mode;
        }
    },
    persist: {
        enabled: true,
        storage: localStorage,
        strategies: [
            {
                key: 'viewMode',
                storage: localStorage,
            },
        ]
    }
})