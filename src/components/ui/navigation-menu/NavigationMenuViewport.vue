<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import {
  NavigationMenuViewport,
  type NavigationMenuViewportProps,
  useForwardProps,
} from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<NavigationMenuViewportProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="absolute left-0 top-full flex justify-center">
    <NavigationMenuViewport
        v-bind="forwardedProps"
        :class="
        cn(
          'origin-top-center relative mt-1.5 ' +
           'h-[--radix-navigation-menu-viewport-height] ' +
           'w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg ' +
            'data-[state=open]:animate-in ' +
             'data-[state=closed]:animate-out ' +
              'data-[state=closed]:fade-out-95 ' +
             'data-[state=open]:fade-in-10 ' +
              'md:w-[--radix-navigation-menu-viewport-width]',
          props.class,
        )
      "
    />
  </div>
</template>


<!--<template>-->
<!--  <div class="absolute left-0 top-full flex justify-center">-->
<!--    <NavigationMenuViewport-->
<!--      v-bind="forwardedProps"-->
<!--      :class="-->
<!--        cn(-->
<!--          'origin-top-center relative mt-1.5 ' +-->
<!--           'h-[&#45;&#45;radix-navigation-menu-viewport-height] ' +-->
<!--           'w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg ' +-->
<!--            'data-[state=open]:animate-in ' +-->
<!--             'data-[state=closed]:animate-out ' +-->
<!--              'data-[state=closed]:zoom-out-95 ' +-->
<!--             'data-[state=open]:zoom-in-90 ' +-->
<!--              'md:w-[&#45;&#45;radix-navigation-menu-viewport-width]',-->
<!--          props.class,-->
<!--        )-->
<!--      "-->
<!--    />-->
<!--  </div>-->
<!--</template>-->
