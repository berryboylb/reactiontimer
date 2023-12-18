<script setup lang="ts">
//imports
import { IResults } from '../types';
import { ref, onMounted } from 'vue';

//refs
const props = defineProps<IResults>();
const rank = ref<string | null>(null)


//hooks
onMounted(() => {
    if (props.results < 250) {
        rank.value = "Ninja fingers...";

    } else if (props.results < 400) {
        rank.value = "Rapid reflexes...";
    } else {
        rank.value = "Snail pace"
    }
})
</script>

<template>
    <p>Reaction time : {{ results }}ms</p>
    <p class="rank">{{ rank }}</p>
</template>

<style scoped>
.rank {
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
}
</style>