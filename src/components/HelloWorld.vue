<script setup lang="ts">
import { useInjectTestStore } from "../stores/testStore.ts";
import { computed } from "vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

defineProps<{ msg: string }>();

const { increaseCounter, reportCounter } = useInjectTestStore();

const counterReport = computed<string>(() => {
  return "REPORT: " + reportCounter();
});

function increaseByTwo() {
  increaseCounter(2);
}
</script>

<template>
  <Card class="w-80">
    <CardHeader>
      <CardTitle>Hello World Component</CardTitle>
      <CardDescription>Random component to test stuff</CardDescription>
    </CardHeader>
    <CardContent>
      This component shows how to consume counter injected from a store. It can read it's value and also call an
      increase action.
    </CardContent>
    <CardFooter>
      <Button size="sm" variant="outline" @click="increaseByTwo">increase by 2</Button>
    </CardFooter>
  </Card>
  <Card class="mt-2 w-80 pt-6">
    <CardContent>{{ counterReport }}</CardContent>
  </Card>
</template>

<style scoped></style>
