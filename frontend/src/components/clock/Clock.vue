<template>
    <div class="clock">
        <div class="current__date" :key="currentDate">
          {{dateString(currentDate)}}
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from '@vue/runtime-core';

const getDayOfWeek = (number) => {
  let weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", ]
  return weekDays[number]
}
export default {
    name: "Clock",
    setup() {
        let now = new Date()

        const currentDate = reactive({
          day: getDayOfWeek(now.getDay()),
          date: now.getDate(),
          month: now.getMonth(),
          year: now.getFullYear(),

          minute: now.getMinutes(),
          hour: now.getHours(),
          })

        const dateString = ({day, date, month, year, minute, hour}) => {
          month += 1
          if (month < 10) month = "0" + month
          
          if (minute < 10) minute = "0" + minute
          if (hour < 10) hour = "0" + hour

          return `${day}\n ${date}.${month}.${year} ${hour}:${minute}`
        }

        const updateDate = () => {
        let now = new Date()

        currentDate.day = getDayOfWeek(now.getDay())
        currentDate.date = now.getDate()
        currentDate.month = now.getMonth(),
        currentDate.year = now.getFullYear(),

        currentDate.minute = now.getMinutes(),
        currentDate.hour = now.getHours()

        }

        onMounted(() =>{
        setInterval(updateDate, 1000)
        })

        return {currentDate, dateString}
    },
}
</script>

<style scoped>
.clock{
  color: white;

}

.current__date{
  font-size: 5vh;
  font-weight: 500;
  color: white;
  text-align: right;
}
@media (min-width: 0px) {
  .clock{
    display: none;
  }
}
@media (min-width: 620px) {
  .clock{
    display: block;
  }
}
</style>