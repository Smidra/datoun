<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { useProvideTestStore } from "./stores/testStore.ts";

const getCountPrefix = () => "the count is";
const { resetCounter } = useProvideTestStore({ getPrefix: getCountPrefix });
</script>

<template>
  <div class="p-3">
    <h1 class="pb-8 text-3xl font-bold underline">Main app here</h1>
    <button type="button" @click="resetCounter">reset counter</button>
    <div>-----</div>
    <HelloWorld msg="Hello World message" />
  </div>
</template>

<style scoped></style>
