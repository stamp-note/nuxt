import {defineStore} from "pinia";
import {useSettingsStore} from "~/stores/settings";

export const usePasswordPadStore = defineStore({
    id: 'passwordPad',
    state: () => ({
        keys : [1, 2, 3, 4, 5, 6, 7, 8, 9, 'del', 0, 'clear'],
        password: '',
        passwordLength: 4,
        preventClick: false
    }),
    actions: {
        init(){
            this.password = '';
            this.preventClick = false;
        },
        setPassword(password: string) {
            this.password = password;
        },
        clearPassword() {
            this.password = '';
        },
        deletePassword() {
            this.password = this.password.slice(0, -1);
        },
        clickKey(key: string | number) {
            if(this.preventClick)
                return;
            if(key === 'clear') {
                this.clearPassword();
                return;
            }
            if(key === 'del' || key === 'Backspace'){
                this.deletePassword();
                return;
            }
            if(0<=key && key<=9) {
                this.setPassword(this.password + String(key));
            }
        },
        // reject, resolve
        async checkPassword() {
            return new Promise((resolve, reject) => {
                if(this.password.length === this.passwordLength) {
                    setTimeout(() => {
                        resolve(this.password === useSettingsStore().password);

                    }, 300);

                }
                else {
                    reject();
                }
            })
        },
        setPasswordLength(length: number) {
            this.passwordLength = length;
        }
    }
})