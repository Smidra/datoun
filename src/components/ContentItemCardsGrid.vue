<script setup lang="ts">

import ItemCard from "@/components/ContentItemCard.vue";
import {piniaStore} from "@/lib/piniaStore.ts";

const store = piniaStore()
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <ItemCard v-for="company in store.companies" :key="company.id" :id="company.id" :name="company.name" :description="company.description"/>
  </div>
</template>

<style scoped>

</style>