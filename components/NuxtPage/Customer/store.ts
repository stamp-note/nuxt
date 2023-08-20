import {defineStore} from "pinia";

export const useCustomerStore = defineStore({
    id: "customer",
    state: () => ({
        viewMode: 'welcome',
    }),
    getters: {

    },
    actions: {
        setViewMode(mode:string) {
            this.viewMode = mode;
        }
    }

})