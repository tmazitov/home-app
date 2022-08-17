<template>
    <div class="task__list">   
        <DropList>
            <template v-slot:content>
                <div>
                    
                </div>
            </template>
            <template v-slot:usage>
                <div>
                    
                </div>
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
import DropList from '../tools/DropList.vue';

export default {
    name: "TaskList",
    components: {
        DropList
    },

}
</script>