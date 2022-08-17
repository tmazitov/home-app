<template>
<div class="droplist">
  <transition name="open" mode="out-in" >
      <div class="list" v-if="isOpened" v-bind:style="`border-color:${borderColor}`">
          <transition name="list__items">
            <span v-if="isShowItems">
              <div class="list_cont" v-if="!isEmpty">
                <slot name="content"></slot>
              </div>
              <div class="empty_list_cont" v-else >
                Список пуст
              </div>
            </span>
          </transition>
        <slot name="usage"></slot>
      </div>
  </transition>
  <span @click="() => {handler()}">
    <slot name="button"></slot>
  </span>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name: "DropList",
    props:{
      isEmpty: Boolean,
      borderColor: {
        type: String,
        default: "#C44536"
      },
    },
    setup() {
      var isOpened = ref(false)
      var isShowItems = ref(false)

      const open = () => {
          isOpened.value = !isOpened.value
          setTimeout(() => {
              isShowItems.value = true
          }, 800)
      } 

      const close = () => {
          isShowItems.value = false
          setTimeout(() => {
              isOpened.value = false
          }, 200)
      }

      const handler = () => {
          if (isOpened.value){
              close()
          } else {
              open()
          }
      }

      return {isOpened, isShowItems, handler}
    }
}
</script>

<style scoped>
.droplist{
    font-weight: 500;
    color: snow;
    min-height: 42px;
    max-height: 500px;
    max-width: 415px;
    min-width: 210px;
    overflow: hidden;
    border-radius: 7px;
}
.empty_list_cont{
    display: flex;
    height: 330px;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    color:#a99e99;
}
.list_cont{
    padding: 15px;
    height: 330px;
    overflow-x: auto;
}
.list{
    border: 2px solid;
    border-bottom: none;
    border-radius: inherit;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    height: 420px;
    grid-row-gap: 10px;
    position: relative;
}
.open-enter-active {
  animation: open 1.1s;
  animation-delay: 0s;
  animation-timing-function: ease;
}
.open-leave-active {
  animation: open 0.8s reverse;
  animation-delay: 0s;
  animation-timing-function: ease;
}

@keyframes open {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 440px;
  }
}

.list__items-enter-active,
.list__items-leave-active {
  transition: all 0.5s ease;
}
.list__items-enter-from,
.list__items-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>e