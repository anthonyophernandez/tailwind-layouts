<template>
  <div class="w-full h-full bg-gray-200">
    <div class="flex items-center justify-between h-16 w-full bg-indigo-700 px-2 mb-8">
      <router-link to="/">
        <h1 class="font-mono text-white hover:text-gray-400 text-lg sm:text-3xl cursor-pointer">Tailwind CSS Layouts</h1>
      </router-link>
      <a class="flex items-center hover:bg-indigo-900 hover:bg-opacity-25 text-white font-semibold py-2 px-4 border border-indigo-900 hover:border-transparent rounded cursor-pointer" :href="url" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 mr-2 icon icon-tabler icon-tabler-brand-github" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
          </svg>
          Github
        </a>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 px-8 mb-8">
      <div class="relative w-full h-full bg-gray-100 border-2 border-indigo-700 rounded-sm" v-for="(project, index) in projects" :key="index">
        <img class="w-full h-full object-contain object-center" :src="project.img">
        <div class="absolute flex items-center justify-center inset-0 hover:bg-indigo-900 hover:bg-opacity-75 text-2xl font-bold text-white text-opacity-0 hover:text-opacity-100 cursor-pointer">
          <router-link :to="project.url">
              <span class="hover:underline">{{ project.title }}</span>
          </router-link>
          <span class="mx-4">|</span>
          <a class="hover:underline" :href="project.codeUrl" target="_blank">View Code</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      url: 'https://github.com/anthonyophernandez/tailwind-layouts',
      projects: [
        {
          title: 'DEV Layout',
          img: require('../assets/img/dev-layout.png'),
          url: '/dev-layout',
          codeUrl: 'https://github.com/anthonyophernandez/tailwind-layouts/blob/master/src/views/layouts/DevLayout.vue'
        },
        {
          title: 'Ecommerce Layout',
          img: require('../assets/img/ecommerce-layout.png'),
          url: '/ecommerce-layout',
          codeUrl: 'https://github.com/anthonyophernandez/tailwind-layouts/blob/master/src/views/layouts/EcommerceLayout.vue'
        }
      ]
    }
  }
}
</script>
