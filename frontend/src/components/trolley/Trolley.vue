<template>
        <div 
            class="trolley"
        >
            <DropList 
                :isEmpty="data.products.length == 0"
            >
                <template v-slot:content>
                    <transition-group name="products" tag="span">
                        <Product
                            v-for="(product, index) in data.products"
                            v-bind:key="`product__${index}`"
                            v-bind:data-index="index"
                            :title="product.title"
                            :count="product.count"
                            :price="product.price"
                        />
                    </transition-group>   
                </template>

                <template v-slot:usage>
                    <transition name="open" mode="out-in">
                        <div class="trolley__all" > 
                            <div class="trolley_add_cont">
                                <div class="add__item title">
                                    <input id="add_item_title" v-model="data.title" type="text" placeholder="Продукт" v-on:keyup.enter="() => {focusField('count')}">
                                </div>
                                <div class="add__item count">
                                    <input id="add_item_count" v-model="data.count" type="text" placeholder="Кол." v-on:keyup.enter="() => {focusField('price')}">
                                </div>
                                <div class="add__item price">
                                    <input id="add_item_price" v-model="data.price" type="text" placeholder="Цена" v-on:keyup.enter="add">
                                </div>
                                <div class="add__item button__cont" @click="add">
                                    <Icon class="button" icon="uil:plus" color="white" width="26" height="26" />
                                </div>
                            </div>
                        </div>
                    </transition>
                </template>

                <template v-slot:button>
                    <ToolItem
                        title="Список продуктов"
                        icon="uil:shopping-cart"
                    />
                </template>
            </DropList>
        </div>
    
</template>

<script>
import ToolItem from '../tools/ToolItem.vue'
import Product from './Product.vue'
import DropList from '../tools/DropList.vue'
import { reactive } from '@vue/reactivity';
import { Icon } from '@iconify/vue';


export default {
    name: "Trolley",
    components:{
        ToolItem,
        Product,
        Icon,
        DropList
    },
    setup() {
        var data = reactive({
            title: "",
            count: "",
            price: "",
            products : []
        })

        const focusField = (name) => {
            document.getElementById(`add_item_${name}`).focus()
        }

        const clearFields = () => {
            data.title = ""
            data.count = ""
            data.price = ""
        }

        const add = () => {
            let product = {}
            
            if (data.title.length <= 2) return

            product["title"] = data.title

            if (data.count && isNaN(parseInt(data.count))) return
            product["count"] = data.count || 1
            
            if (data.price && isNaN(parseInt(data.price))) return
            product["price"] = data.price || -1

            clearFields()
            focusField("title")

            data.products.push(product)
        }


        return { add, data, focusField}
    },
}
</script>

<style scoped>


.trolley_add_cont{
    position: absolute;
    bottom: 0;
    height: 64px;
    display: grid;
    grid-template-columns: calc(100% - 30px - 100px - 55px) 50px 50px 40px;
    grid-column-gap: 15px;
    width: calc(100% - 40px);
    margin-right: 20px;
    margin-left: 20px;
}


input:focus{
outline: none;
}
.add__item {
    padding:  15px 0;
}

.button__cont{
    padding: 10px 0;
}

.button{
    height: 40px;
    width: 40px;
    border-radius: 7px;
    background: #C44536;
}

.trolley_add_cont * input {
    width: calc(100% - 15px - 3px);
    height: 20px;
    border: 2px solid #c44536;
    border-radius: 9px;
    padding: 4px 7px;
    font-family: Rubik;
}

.products-enter-active,
.products-leave-active {
  transition: all 0.5s ease;
}
.products-enter-from,
.products-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

</style>