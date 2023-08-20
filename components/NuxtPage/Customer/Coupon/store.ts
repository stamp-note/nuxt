import {defineStore} from "pinia";

export const useCustomerCouponStore = defineStore({
    id: 'customer-coupon',
    state: () => ({
        coupon: null,
    }),
    actions: {
        reset() {
            this.coupon = null;
        },
        setCoupon(coupon: any) {
            this.coupon = coupon;
        },
        loadCoupon(couponId: number) {

        }
    }

})