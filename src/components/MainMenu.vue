<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import MainMenuCardForCategoryB from "@/components/MainMenuCardForCategoryB.vue";
import {piniaStore} from "@/lib/piniaStore.ts";
import {Separator} from "@/components/ui/separator";
import {MenuButton} from "@/components/ui/menu-button";
const store = piniaStore()
</script>

<template>
  <NavigationMenu :delayDuration="50" :skip-delay-duration="0" :disableHoverTrigger="false" orientation="vertical" class="items-start">
    <NavigationMenuList className="flex-col items-start space-x-0">
      <NavigationMenuItem v-for="cat_a in store.categories" key="cat_a.id">
        <NavigationMenuTrigger class="w-menu-width justify-start">{{ cat_a.name }}</NavigationMenuTrigger>

        <NavigationMenuContent>
          <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] h-[300px] ">
            <MainMenuCardForCategoryB
                v-for="cat_b in cat_a.subcategories"
                :key="cat_b.id"
                :title="cat_b.name"
                :subcategories="cat_b.subcategories"
            >
            </MainMenuCardForCategoryB>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <Separator />
      <NavigationMenuItem>
        <MenuButton variant="ghost" class="w-menu-width text-sm font-medium p-4">
          Přidat novou firmu
        </MenuButton>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
</template>

<style scoped>

</style>