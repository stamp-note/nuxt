import { defineStore } from 'pinia'
export const useStampStore = defineStore('stamp', {
    state: () => ({
        stampLocationList: [],
    }),
    actions: {
        addStampLocation(stampLocation) {
            this.stampLocationList.push(stampLocation)
        }
    }
})