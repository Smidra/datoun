<script setup lang="ts">
import {piniaStore} from "@/lib/piniaStore.ts";
const store = piniaStore()

</script>

<template>
<input type="text" v-model="store.category_a_selected"/>
  {{ store.category_a_selected }}
</template>

<style scoped>

</style>