import { defineStore} from "pinia";

export const useBrowserEvent = defineStore("browserEvent", {
    state: () => ({
        isMobile: false,
        isSearchMode: false,

    }),
    getters: {

    },
    actions: {
        setMobile(isMobile: boolean) {
            this.isMobile = isMobile
        },
        setSearchMode(isSearchMode: boolean) {
            this.isSearchMode = isSearchMode
        }
    },
    persist: true,
})