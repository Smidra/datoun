<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";

const mode = useColorMode();

const toggleMode = () => {
  if (mode.value === "dark") {
    mode.value = "light";
  } else {
    mode.value = "dark";
  }
};
</script>

<template>
  <Button variant="ghost" size="icon" @click="toggleMode">
    <Icon
      icon="radix-icons:moon"
      class="h-[1.3rem] w-[1.3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <Icon
      icon="radix-icons:sun"
      class="absolute h-[1.3rem] w-[1.3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
