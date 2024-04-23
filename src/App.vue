<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { useProvideTestStore } from "./stores/testStore.ts";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DarkModeToggle from "@/components/ui/darkModeToggle/DarkModeToggle.vue";

const getCountPrefix = () => "the count is";
const { resetCounter } = useProvideTestStore({ getPrefix: getCountPrefix });
</script>

<template>
  <div class="w-96 p-3">
    <div class="flex flex-row justify-between">
      <h1 class="scroll-m-20 pb-8 text-4xl font-extrabold tracking-tight lg:text-5xl">Main app here</h1>
      <DarkModeToggle />
    </div>
    <div>
      <Button @click="resetCounter">reset counter</Button>
    </div>
    <Separator class="my-4" />
    <HelloWorld msg="Hello World message" />
  </div>
</template>

<style scoped></style>
