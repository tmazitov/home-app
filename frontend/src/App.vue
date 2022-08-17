<template>
  <div class="main">
    <div class="main__header"><h1>Home</h1></div>
    <div class="main__description"><p>Приложение для облегчения рутинных задач внутри дома.</p></div>
    <Trolley />
  </div>
</template>

<script>
import Trolley from './components/trolley/Trolley.vue'

const items = [
  {title: "Список продуктов", icon:"uil:shopping-cart"}
]

export default {
  name: 'App',
  components: {
    Trolley
  },
  setup(){
    return {items,}
  }
}
</script>

<style>
#app {
  font-family: Rubik;
  height: 100%;
  background: #edddd4;
}

body{
  margin: 0;
}
.main{
  padding: 50px;
}
</style>
