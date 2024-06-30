<script setup lang="ts">
// Define props for the component. We only have "name"
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subcategories: {
    required: true,
  }
})
</script>

<template>
  <div>
    <div class="text-md font-semibold">
      {{ props.title }}
    </div>

    <ul class="text-sm ml-6 list-disc [&>li]:mt-2">
      <li v-for="subcategory in props.subcategories" key="subcategory.id">
        {{ subcategory.name }}
      </li>
    </ul>
  </div>
</template>
