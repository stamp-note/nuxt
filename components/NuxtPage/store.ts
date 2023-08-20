import {defineStore} from "pinia";

export const useMainStore = defineStore({
    id: "main",
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
            this.saveViewMode();
        },
        loadViewMode() {
            this.viewMode = localStorage.getItem('viewMode') || 'Customer & Admin';
        },
        saveViewMode() {
            localStorage.setItem('viewMode', this.viewMode);
        }
    },
})