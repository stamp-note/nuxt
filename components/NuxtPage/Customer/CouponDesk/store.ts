import {defineStore} from "pinia";

export const useCouponDeskStore = defineStore({
    id: 'customer-coupon',
    state: () => ({
        coupon: null,
        userName: 'John Doe',
    }),
    actions: {
        reset() {
            this.coupon = null;
        },
        setCoupon(coupon: any) {
            this.coupon = coupon;
        },
        setUserName(name: string) {
            this.userName = name;
        },
        loadCoupon(couponId: number) {

        }
    }

})