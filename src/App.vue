<script setup lang="ts">
//imports
import { ref } from 'vue';
import Block from './components/Block.vue';
import Results from './components/Results.vue';

//ref
const isPlaying = ref<boolean>(false);
const showResults = ref<boolean>(false);
const delay = ref<null | number>(null);
const score = ref<null | number>(null);

//methods
const start = () => {
  //max delay is between 2s to 7s
  delay.value = Math.round((2000 + Math.random() * 5000) / 1000) * 1000;
  isPlaying.value = !isPlaying.value;
  showResults.value = false
}

const end = (time: number) => {
  score.value = time;
  isPlaying.value = !isPlaying.value;
  showResults.value = true
}
</script>

<template>
  <div>
    <h1>Reaction Vue App</h1>
    <button :disabled="isPlaying" @click="start">Play</button>
    <Results  v-if="showResults" :results="score ? score : 0"/>
  </div>
  <Block :delay="delay" v-if="isPlaying" @end="end" />
</template>

<style scoped></style>
