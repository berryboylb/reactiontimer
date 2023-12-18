
<script setup lang="ts">
import { onMounted, ref, onUpdated, onUnmounted } from 'vue';
import { IBlock, IBlockEmits } from '../types';
const props = defineProps<IBlock>();
const emit = defineEmits<IBlockEmits>();

//refs
const show = ref<boolean>(false);
const timer = ref<NodeJS.Timeout | null>(null);
const reactionTime = ref(0);


//methods
const startTimer = () => {
    //add 10 every 10ms  and store the value in timer
    timer.value = setInterval(() => {
        reactionTime.value += 10;
    }, 10)
}

const stopTimer = () => {
    // clear the interval
    if (timer.value) {
        clearInterval(timer.value);
        timer.value = null;
        emit('end', reactionTime.value);
    }
}

//hooks
onMounted(() => {
    if (props.delay)
        setTimeout(() => {
            show.value = !show.value;
            startTimer()
        }, props.delay)

})

onUpdated(() => {
    console.log("Updated")
})
onUnmounted(() => {
    console.log("unmounted")
})
</script>

<template>
    <div class="block" v-if="show" @click="stopTimer">
        <h1>Click</h1>
        <p class="cat">cat</p>
    </div>
</template>

<style lang="scss" scoped>
.block {
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: #fff;
    text-align: center;
    padding: 100px 0;
    margin: 4px auto;
    .cat {
        display: inline-block;
        color: pink;
    }
}
</style>