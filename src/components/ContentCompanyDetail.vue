<script setup lang="ts">
import {piniaStore} from "@/lib/piniaStore.ts";
import ContentMainText from "@/components/ContentMainText.vue";
const store = piniaStore()
</script>

<template>
  <div class="h-10 break-words text-sm text-muted-foreground sm:gap-2.5">
    Detail společnosti
  </div>
  <ContentMainText>Detail of company {{ store.company_id_selected }}</ContentMainText>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>
