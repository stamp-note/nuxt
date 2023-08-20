import {defineStore} from "pinia";

export const useUserCouponStore = defineStore({
    id: "user-coupon",

    state: () => ({
        userList: [
            {
                uId: 1,
                name: "user1",
                createdAt: new Date(),

                couponList: [{
                    cId: 1,
                    identification: {
                        type: "question",
                        params: {
                            question: "question1",
                            answer: "answer1"
                        }
                    },
                    stamp: {
                        type: "stamp",
                        params: {
                            count: 0,
                            maxCount: 10,
                            locations: []
                        }
                    },
                    createdAt: new Date(),
                }]
            }
        ],
        page: 1,
        perPage: 3,
        search: ""
    }),
    getters: {
        searchUserList() {
            return this.userList.filter((item) => item.name.includes(this.search)) || [];
        },
        total(){
            return this.searchUserList.length;
        }
    },
    actions: {
        reset(){
            this.page = 1;
            this.search = "";
        },
        setPage(page) {
            this.page = page;
        },
        setSearch(search) {
            this.search = search;
        },
        setPerPage(perPage) {
            this.perPage = perPage;
        },
        makeUserObj(name, question, answer) {
            return {
                uId: this.userList.reduce((acc, cur) => Math.max(acc, cur.uId), 0) + 1,
                name,
                createdAt: new Date(),
                couponList: [{
                    cId: 1,
                    identification: {
                        type: "question",
                        params: {
                            question,
                            answer
                        },

                    },
                    stamp: {
                        type: "stamp",
                        params: {
                            count: 0,
                            maxCount: 10,
                            locations: []

                        }
                    },
                    createdAt: new Date(),
                }],
            }
        },
        async loadUserList() {
            // it can be changed to fetch data from API
            this.userList = JSON.parse(window.localStorage.getItem("userCouponList")) || [];
        },
        async saveUserList() {
            // it can be changed to fetch data from API
            window.localStorage.setItem("userCouponList", JSON.stringify(this.userList));
        },
        async addUser(name, question, answer) {
            this.userList.push(this.makeUserObj(name, question, answer));
            await this.saveUserList();
        },
        async removeUser(uId) {
            this.userList = this.userList.filter((item) => item.uId !== uId);
            await this.saveUserList();
        },
        async hasUserName(name) {
            return this.userList.some((item) => item.name === name);
        }
    }
})