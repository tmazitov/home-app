<template>
    <div class="exchange__cont">
        <div class="exchange__item bitcoin">
            <Icon icon="uil:bitcoin-circle" width="32" height="32" />
            <div class="price">{{rate.bitcoin}}</div>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import getRate from '../../api/bitcoin/bitcoin.js'
import { onBeforeMount, reactive } from '@vue/runtime-core';

export default {
    name: "ExchangeRate",
    components:{
        Icon
    },
    setup() {
        const rate = reactive({
            bitcoin: "---"
        })

        const setupBitcoinRate = () => {
            getRate().then((rateData) => {
                let usd = rateData["USD"]

                rate.bitcoin = `${usd["15m"]} $`
            })
        }
        
        onBeforeMount(() => {
            setupBitcoinRate()
            setInterval(setupBitcoinRate, 60000)
        })
        
        return {rate}
    },
}
</script>

<style scoped>
.exchange__item{
    display: grid;
    grid-template-columns: 32px calc( 100% - 4px - 32px);
    grid-column-gap: 4px;
    font-size: 18px;
    height: fit-content;
    color: rgb(48, 75, 66)
}

.exchange__item > *{
    display: flex;
    align-items: center;
}

</style>