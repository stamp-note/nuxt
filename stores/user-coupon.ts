import {defineStore} from "pinia";

export const useUserCouponStore = defineStore({
    id: "user-coupon",

    state: () => ({
        userList: [
            {
                uId: 1,
                name: "user1",
                couponList: [{
                    cId: 1,
                    identification: {
                        type     : "question",
                        params: {
                            question: "question1",
                            answer: "answer1"
                        }
                    }
                }]

            }
        ],
    }),

    actions: {
        async loadUserList() {
            // it can be changed to fetch data from API
            this.userList = JSON.parse(window.localStorage.getItem("userCouponList")) || [];
        },
        async saveUserList() {
            // it can be changed to fetch data from API
            window.localStorage.setItem("userCouponList", JSON.stringify(this.userList));
        },
        async addUser(user) {
            this.userList.push(user);
            await this.saveUserList();
        },
        async removeUser(uId) {
            this.userList = this.userList.filter((item) => item.uId !== uId);
            await this.saveUserList();
        }
    }
})