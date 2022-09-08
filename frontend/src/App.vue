<template>
  <div>
    <div class="main__image">
      <img src="../public/DSC_0164copy.jpg">
      <div class="main_hot_tools">
        <Clock/>
        <div class="weather_and_rate">
          <div>
            <!-- something new -->
          </div>
          <ExchangeRate/>
          <Weather/>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main__header">Tools</div>
      <div class="main__description"><p>Приложение для облегчения рутинных домашних задач. </p></div>
      <div class="main__tools">
        <Trolley  class="tool"/>
        <TaskList class="tool"/>
      </div>
    </div>
  </div>
</template>

<script>

import TaskList from './components/tasklist/TaskList.vue';
import Trolley from './components/trolley/Trolley.vue'
import Clock from './components/clock/Clock.vue'
import Weather from './components/weather/Weather.vue';
import ExchangeRate from './components/exchange-rate/ExchangeRate.vue';

export default {
  name: 'App',
  components: {
    Trolley,
    TaskList,
    Clock,
    Weather,
    ExchangeRate
  }
}
</script>

<style>
#app {
  font-family: Rubik;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

body{
  margin: 0;
}
.main{
  padding: 25px 0;
}

.main__description{
  min-width: 300px;
  margin-right: 5vw;
  margin-left: 5vw;
}

.main__image {
  position: relative;
  width: -webkit-fill-available;;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background: rgb(110, 115, 129);
}

.main__image > img{
  width: inherit;
}

.main_hot_tools{
  position: absolute;
  bottom: 50px;
  width: fit-content;
  right: 20px;
  display: grid;
}

.main__header{
  font-size: 3vh;
  font-weight: 500;
}

/* Устроства с маленьким экраном (планшеты, 768px и выше) */
@media (min-width: 0px) {
  .main__tools{
    display: grid;
    grid-template-rows: auto;
    grid-column-gap: 0;
  }
  .main_hot_tools{
    right: 40px;
    bottom:20px;
  }
  .main{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
  }
  .main__description{

    max-width: 530px;
  }

  .main__description > p{
    width: 300px;
  }
}

/* Устроства с маленьким экраном (планшеты, 768px и выше) */
@media (min-width: 620px) {
  .main__tools{
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-column-gap: 20px;
  }
  .main{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
  }
  .main__description{
    max-width: 530px;
  }
  .main__description > p{
    width: inherit;
  }
}

/* Устройства со средним экраном (ноутбуки и компьютеры, 992px и выше) */
@media (min-width: 992px) {
  /* Стили для устройств с шириной viewport, находящейся в диапазоне 992px - 1199px */
  .main__tools{
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-column-gap: 20px;
  }
  .main{
    width: 60vw;
  }
  .main__description{
    max-width: 530px;
  }
}

/* Устройства с большим экраном (компьютеры, 1200px и выше) */
@media (min-width: 1200px) {
  /* Стили для устройств с шириной viewport >1200px */
  .main__tools{
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-column-gap: 20px;
  }
  .main{
    width: 60vw;
  }
  .main__description{
    max-width: 730px;
  }
}

.tool {
  margin-bottom: 16px;
  max-width: 350px;
}

.weather_and_rate{
  display: grid;
  grid-template-columns: 50px 150px calc(100% - 100px - 100px - 10px);
  grid-column-gap: 10px;
}
</style>
