import {defineStore} from "pinia";

export const useSettingsStore = defineStore({
    id: 'settings',
    state: () => ({
        password: '111111'
    }),
    actions: {
        setPassword(password: string) {
            this.password = password;
        }
    },
    persist: {
        enabled: true,
        storage: localStorage,
        strategies: [
            {
                key: 'password',
                storage: localStorage,
            }
        ]
    }
})