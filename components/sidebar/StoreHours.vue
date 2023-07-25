<template>
    <div>
        <secion>
            <div class="storeOperHours">
                <p class="operDay">
                    월, 화, 수, 목, 금
                </p>
                <p class="operHours">
                    10:00 ~ 22:00
                </p>
            </div>
    
            <div class="storeOperHours storeOperHours2">
                <p class="operDay">
                    토, 일
                </p>
                <p class="operHours">
                    08:00 ~ 22:00
                </p>
            </div>
    
            <div class="storeClosedDay">
                <p class="closeDay">
                    연중무휴
                </p>
            </div>
        </secion>
    </div>
</template>

<style lang="scss" scoped>
    .storeOperHours {
        margin-top: $spacing-xs;
    }
    .closeDay {
        font-size: 32px;
        font-weight: 700;
    }
</style>