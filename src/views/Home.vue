<template>
  <div class="w-full h-full bg-gray-200">
    <div class="flex items-center justify-center h-16 w-full bg-indigo-700 mb-8">
      <router-link to="/">
        <h1 class="font-mono text-white hover:text-gray-400 text-3xl cursor-pointer">Tailwind CSS Layouts</h1>
      </router-link>
    </div>
    <div class="grid grid-cols-none sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-8 mb-8">
      <div class="relative w-full h-full bg-gray-100 border-2 border-indigo-700 rounded-sm" v-for="index in 13" :key="index">
        <img class="w-full h-full object-contain object-center" src="../assets/img/dev-layout.png">
        <router-link to="/dev-layout">
          <div class="absolute flex items-center justify-center inset-0 hover:bg-indigo-900 hover:bg-opacity-75 text-2xl font-bold text-white text-opacity-0 hover:text-opacity-100 cursor-pointer">
            DEV Layout
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {

  }
}
</script>
