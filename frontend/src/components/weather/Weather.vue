<template>
    <div class="weather">
        <div class="image">
            <lottie-player :src="image"  background="transparent"  speed="0.75"  style="width: 150px; height: 150px;"  loop autoplay></lottie-player>
        </div>
        <div class="info">
            <div class="temperature">
                {{weather.temperature}}°C
            </div>
            <div class="comment">
                {{comment}}
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
const images = {
    0 : 'https://assets2.lottiefiles.com/temp/lf20_Stdaec.json',
    1 : 'https://assets6.lottiefiles.com/temp/lf20_VAmWRg.json',
    2 : 'https://assets6.lottiefiles.com/temp/lf20_Kuot2e.json',
    3 : 'https://assets6.lottiefiles.com/temp/lf20_VAmWRg.json'
}

const imageComments = {
    0 : 'Солнечно',
    1 : 'Ветренно',
    2 : 'Гроза',
    3 : 'Облачно'
}

export default {
    setup() {
        const weather = reactive({
            temperature: "+15",
            index: 2
        })

        return {weather, image: images[weather.index], comment: imageComments[weather.index]}
    },
}
</script>

<style scoped>

.weather{
    color: white
}
.weather > .info > .comment  {
    font-size: 2vh;
}

@media (min-width: 0px) {
    .weather{
        display: block;
        width: 100vw;
    }
    .info > *{
        font-size: 2vh;
        margin: 0 auto ;
        width: fit-content;
    }

    .image{
        margin: 0 auto;
        width: fit-content ;
    }
}

@media (min-width: 620px) {
    .weather{
        display: grid;
        grid-template-columns: 150px auto;
        width: fit-content;
    }
    .temperature  {
        font-weight: 500;
        font-size: 7vh;
    }
    .info > *{
        font-size: 2vh;
        margin: 0;
        width: fit-content;
    } 
    .info > .temperature  {
        font-size: 7vh;
    }
}

</style>