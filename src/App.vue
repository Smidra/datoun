<script setup lang="ts">
import Card from './components/ui/card/Card.vue'
import Separator from './components/ui/separator/Separator.vue'
import Logo from "@/components/Logo.vue";
import Search from "@/components/Search.vue"
import CategoryBreadcrumbs from "@/components/CategoryBreadcrumbs.vue";
import ContentText from "@/components/ContentMainText.vue";
import ProfileCircle from "@/components/ProfileCircle.vue";
import ContentItemCardsGrid from "@/components/ContentItemCardsGrid.vue";
import {piniaStore, state_enum} from "@/lib/piniaStore.ts";
import ContentCompanyDetail from "@/components/ContentCompanyDetail.vue";
import MainMenu from "@/components/MainMenu.vue";

const store = piniaStore()
</script>

<template>
  <div class="bg-whites h-screen">
    <div class="max-w-6xl mx-auto pt-5 px-5">
      <!-- HEADER  -->
      <div class="flex flex-row justify-between pb-5">
        <Logo/>
        <div class="flex flex-row gap-5">
          <Search/>
          <ProfileCircle/>
        </div>
      </div>

      <!--  BODY  -->
      <Card class="flex flex-row shadow min-h-[600px] mb-16">
        <!-- Left side (menu)-->
        <div class="w-menu-width flex flex-col">
          <MainMenu />
        </div>

        <!-- Verical line -->
        <div class="flex flex-col">
          <Separator orientation="vertical"/>
        </div>

        <!-- Right side (content) -->
        <div class="basis-full">
          <div class=" pl-5 pr-5 pb-5 pt-3">

            <!-- Detail od Company -->
            <div v-if="store.state === state_enum.ShowingDetail">
              <ContentCompanyDetail/>
            </div>

            <!-- Companies grid -->
            <div v-if="store.state === state_enum.ShowingComapniesGrid">
              <div class="h-10">
                <CategoryBreadcrumbs/>
              </div>
              <ContentText>{{ store.category_c_selected }}</ContentText>
              <ContentItemCardsGrid/>
            </div>

          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
</style>