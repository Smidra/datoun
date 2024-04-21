<script setup lang="ts">
import { useInjectTestStore } from "../stores/testStore.ts";
import { computed } from "vue";

defineProps<{ msg: string }>();

const { increaseCounter, reportCounter } = useInjectTestStore();

const counterReport = computed<string>(() => {
  return "REPORT: " + reportCounter();
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="() => increaseCounter(2)">increase counter by 2</button>
  <div>{{ counterReport }}</div>
</template>

<style scoped></style>
