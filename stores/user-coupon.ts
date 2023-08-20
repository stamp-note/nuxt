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
        async loadUserCouponList() {
            // it can be changed to fetch data from API
            this.userCouponList = JSON.parse(window.localStorage.getItem("userCouponList")) || [];
        },
        async saveUserCouponList() {
            // it can be changed to fetch data from API
            window.localStorage.setItem("userCouponList", JSON.stringify(this.userCouponList));
        },
        async addUserCoupon(userCoupon) {
            this.userCouponList.push(userCoupon);
            await this.saveUserCouponList();
        },
        async removeUserCoupon(userCoupon) {
            this.userCouponList = this.userCouponList.filter((item) => item.id !== userCoupon.id);
            await this.saveUserCouponList();
        }
    }
})