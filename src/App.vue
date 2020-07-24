<template>
  <div id="app" class="w-full h-screen">
    <router-view/>
    <div v-if="this.$router.history.current['path'] !== '/'" class="fixed flex items-center justify-center w-12 h-12 mr-2 mb-2 bottom-0 right-0 rounded-full bg-indigo-700 hover:bg-indigo-800">
      <router-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 text-white stroke-current icon icon-tabler icon-tabler-arrow-back-up" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
