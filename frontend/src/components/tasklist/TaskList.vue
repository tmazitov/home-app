<template>
    <div class="tasks">
        <DropList :isEmpty="data.tasks.length == 0" :borderColor="colors.main">
            <template v-slot:content>
                <transition-group name="tasks" tag="span">
                    <div v-for="(task, index) in data.tasks" class="task" :key="`task__${index}`">
                        <div class="title">
                            {{task.title}}
                        </div>
                        <div class="delete__button" @click="()=>{del(index)}">
                            <Icon  class="button" icon="uil:multiply" color="#c44536" width="26" height="26" />
                        </div>
                    </div>
                </transition-group>
            </template>
            <template v-slot:button>
                <ToolItem 
                    title="Список дел"
                    icon="uil:check"
                    :mainColor="colors.main"
                    :secondColor="colors.second"
                />
            </template>
            <template v-slot:usage>
                <transition name="open" mode="out-in">
                    <div class="tasklist__all" > 
                        <div class="tasklist_add_cont">
                            <div class="add__item title">
                                <input ref="titleField" v-model="data.title" type="text" placeholder="Таска" v-on:keyup.enter="add">
                            </div>
                            <div class="add__item button__cont" @click="add">
                                <Icon class="button" icon="uil:plus" color="white" width="26" height="26" />
                            </div>
                        </div>
                    </div>
                </transition>
            </template>
        </DropList>
    </div>
</template>

<script>
import { reactive, ref,  } from 'vue';
import { Icon } from '@iconify/vue';
import DropList from '../tools/DropList.vue';
import ToolItem from '../tools/ToolItem.vue';

export default {
    name: "TaskList",
    components: {
        DropList,
        ToolItem,
        Icon
    },
    setup(){
        var data = reactive({
            tasks: [
            ],
            title: ""
        })
        const titleField = ref(null)
        const colors = {
            main : () => "#197278",
            second : () => "#283D3B"
        }

        const focusField = () => {
            titleField.value.focus()
        }

        const add = () => {
            let task = {}
            
            if (data.title.length <= 2) return

            task["title"] = data.title
            data.title = ""

            focusField("title__field")
            data.tasks.push(task)
        }
        
        const del = (delIndex) => {
            data.tasks = data.tasks.filter((_, index) => {
                return delIndex != index
            })
        }

        return {add, del, data, colors, titleField}
    },
}
</script>

<style scoped>
.task{
    color:black;
    display: grid;
    grid-template-columns: calc(100% - 23px - 10px) 23px;
    grid-column-gap: 10px;
    margin-bottom: 15px;
}

.task > * {
    display: flex;
    align-items: center;
}

.tasklist_add_cont{
    position: absolute;
    bottom: 0;
    height: 64px;
    display: grid;
    grid-template-columns: calc(100% - 55px) 40px;
    grid-column-gap: 15px;
    width: calc(100% - 40px);
    margin-right: 20px;
    margin-left: 20px;
}

.tasklist_add_cont * input {
    width: calc(100% - 15px - 3px);
    height: 20px;
    border: 2px solid #197278;
    border-radius: 9px;
    padding: 4px 7px;
    font-family: Rubik;
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

.button__cont > .button{
    height: 40px;
    width: 40px;
    border-radius: 7px;
    background: #197278;
}

.tasks-enter-active,
.tasks-leave-active {
  transition: all 0.5s ease;
}
.tasks-enter-from,
.tasks-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>