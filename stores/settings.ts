import {defineStore} from "pinia";
import bcrypt from 'bcryptjs';

export const useSettingsStore = defineStore({
    id: 'settings',
    state: () => ({
        password: '$2a$10$wrkLN8Mot9vMpY/dwyAL3eKWJ4gIYfC88AcFbssUBs1SPlyttFuP.'
    }),
    actions: {
        setPassword(password: string) {
            this.password = bcrypt.hashSync(password);
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