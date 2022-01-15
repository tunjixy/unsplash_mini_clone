<template>
  <div id="app" class="font-MaisonNeue antialiased text-primary">
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style>
@import 'assets/css/tailwind.css';

html,
body {
  height: 100%;
}
</style>
