<template>
    
<div>
    <div class="product"  
        v-bind:class="{with__price:price > 0}"
        @click="() => {openRemove()}"
    >   
        <div class="selector" v-bind:class="{
            active: isRemove
        }">
            <span class="iconify" data-icon="uil:arrow-right" data-width="23" data-height="23" ></span>
        </div>
        <div class="title">{{title}}</div>
        <div v-if="price > 0" class="price">
            {{price}}₽
        </div>
        <div class="count">{{count}} шт.</div>
    </div>
    <transition name="buttons">
        <div class="product__buttons" v-if="isRemove">
            <div class="button update">Update</div>
            <div class="button done">Done</div>
        </div>
    </transition>

</div>
    
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    name: "Product",
    props: {
        title: String,
        count: {
            type: Number,
            default: 1,
        },
        price: {
            type: Number,
            default: -1
        },  
    },
    setup(){
        var isRemove = ref(false)

        const openRemove = () => {
            isRemove.value = !isRemove.value
        }

        return {isRemove: isRemove, openRemove}
    }   
}
</script>

<style scoped>
.product{
    color: black;
    font-weight: 400;
    display: grid;
    grid-template-columns: 23px calc(100% - 23px - 14px - 55px) 55px;
    grid-column-gap: 7px;
    margin-bottom: 15px;
    animation: product .8s ease;
    position: relative;
}

.product > * {
    display: flex;
    align-items: center;
}

.with__price{
    grid-template-columns: 23px calc(100% - 23px - 21px - 67px - 55px) 67px 55px;
}

.selector{ 
    color: #c44536;
    -moz-transition: all .3s ease;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}

.selector.active{ 
    -moz-transform:rotate(90deg);
    -webkit-transform:rotate(90deg);
    transform:rotate(90deg);
}

@keyframes spin{
    100% {transform: rotate(90deg);}
}

.delete__button{
    height: 100%;
    width: 23px;
    color:white;
    background: #c44536;
    border-radius: 23px;
    position: absolute;
    right: 0;
}

.product__buttons{
    display: grid;
    grid-template-columns: calc(50% - 10px) calc(50% - 10px);
    grid-column-gap: 15px;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 25px;
}



.button{
    border: 2px solid;
    height: 24px;
    display: flex;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
}

.done{
    border-color: #31572c;
    background: #4f772d;
    color:white
}

.update{
    border-color: #ff9505;
    background: #ffbd00;
    color: white
}

.buttons-enter-active,
.buttons-leave-active {
  transition: all 0.5s ease;
}
.buttons-enter-from,
.buttons-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>