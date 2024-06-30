<script setup lang="ts">
import {piniaStore} from "@/lib/piniaStore.ts";

const store = piniaStore()
</script>

<template>
  <div style="font-family: 'IBM Plex Serif', Serif,serif;font-weight: 700;"
       class="text-4xl hover:cursor-pointer hover:underline decoration-amber-300 decoration-wavy"
       @mousedown="store.resetAndGoHome()">
    Datoun
  </div>
</template>

<style scoped>

</style>