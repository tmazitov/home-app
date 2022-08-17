<template>
    <div class="toollist__item" v-bind:style="`background: ${mainColor}`">
        <div class="item__selector" v-bind:style="`background: ${secondColor}`">
            <Icon 
                :icon="`${icon}`" 
                color="#C44536" 
                width="28" 
                height="28" 
                :horizontalFlip="true"
            />
        </div>
        <div class="item__title">{{title}}</div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
    name: "ToolItem",
    props:{
        title: String,
        icon: String,
        mainColor: {
            type: String,
            default: "#C44536"
        },
        secondColor: {
            type: String,
            default: "#772E25"  
        }
    },
    components:{
        Icon
    },
}
</script>

<style scoped>
.toollist__item{
    padding: 8px;
    display: grid;
    width: auto;
    grid-template-columns: 28px calc(100% - 28px - 10px);
    grid-column-gap: 10px;
}

.item__title{
    display: flex;
    align-items: center;
}

.item__selector{
    border-radius: 7px;
    width: 28px;
    height: 28px;
}


</style>