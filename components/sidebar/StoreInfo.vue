<template>
    <div>
        <secion>
            <div class="storeBankInfo">
                <p class="bankName">
                    신한은행
                </p>
                <p class="bankDepositor">
                    홍길동
                </p>
                <p class="bankAccountNum">
                    110-123-123123
                </p>
            </div>
    
            <div class="storeAddressInfo">
                <p class="address">
                    서울특별시 강남구 테헤란로 152 강남파이낸스센터
                </p>
                <p class="addressDesc">
                    건물 들어오셔서 오른쪽 엘레베이터 타시고 n층으로 오시면 됩니다.
                </p>
            </div>
    
            <div class="storeParkingInfo">
                <p class="parkingDesc">
                    주차는 건물 지하에 하시면 됩니다.
                </p>
            </div>
        </secion>
    </div>
</template>

<style lang="scss" scoped>
    secion {
        margin-top: $spacing-xl;

        div {
            margin-top: $spacing-m;
        }

        p {
            font-size: $txt-m;
            word-break: keep-all;
        }
    }
</style>