<script setup lang="ts">
import Card from "./ui/card/Card.vue";
import {piniaStore} from "@/lib/piniaStore.ts";
const store = piniaStore()
// Define props for the component. We only have "name"
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Card class="p-5 shadow hover:bg-muted hover:cursor-pointer" @mousedown="store.showCompanyDetail(props.id)">
    <div class="">{{ props.name }}</div>
    <div class="text-sm text-muted-foreground">{{ props.description }}</div>
  </Card>
</template>

<style scoped>

</style>