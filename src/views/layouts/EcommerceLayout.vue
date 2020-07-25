<template>
  <div class="relative w-full bg-gray-200">
    <header>
      <div class="mx-auto px-6 py-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center h-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current text-gray-600 icon icon-tabler icon-tabler-map-pin" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <circle cx="12" cy="11" r="3" />
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <span class="text-gray-600 text-sm mx-1">ES</span>
          </div>
          <h1 class="text-gray-800 text-2xl font-bold">Ecommerce</h1>
          <button class="focus:outline-none text-gray-600" @click="toggleSidebar">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current icon icon-tabler icon-tabler-shopping-cart" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <circle cx="9" cy="19" r="2" />
              <circle cx="17" cy="19" r="2" />
              <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
            </svg>
          </button>
        </div>
        <nav class="flex items-center justify-center mt-4">
          <div class="flex">
            <a class="mx-3 cursor-pointer text-gray-600 hover:underline">Home</a>
            <a class="mx-3 cursor-pointer text-gray-600 hover:underline">Shop</a>
            <a class="mx-3 cursor-pointer text-gray-600 hover:underline">Categories</a>
            <a class="mx-3 cursor-pointer text-gray-600 hover:underline">Contact</a>
            <a class="mx-3 cursor-pointer text-gray-600 hover:underline">About</a>
          </div>
        </nav>
        <div class="relative mt-6 max-w-lg mx-auto">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current text-gray-600 icon icon-tabler icon-tabler-search" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </span>
          <input class="w-full border rounded-sm pl-10 pr-4 py-2 focus:outline-none focus:border-indigo-500" type="text" placeholder="Search">
        </div>
      </div>
    </header>
    <div v-if="isOpenSidebar" class="fixed z-50 inset-y-0 right-0 max-w-xs w-full h-full px-6 py-4 bg-white border-l border-gray-500">
      <div class="flex items-center justify-between">
        <h3 class="text-gray-800 text-xl">Your cart</h3>
        <button class="focus:outline-none" @click="toggleSidebar">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current text-gray-600 icon icon-tabler icon-tabler-x" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <hr class="my-3">
      <div class="grid gap-6">
        <div class="flex justify-between" v-for="index in 3" :key="index">
          <div class="flex">
            <img class="w-20 h-20 bg-indigo-500 rounded">
            <div class="mx-3">
              <h3 class="text-sm text-gray-600">Product #{{ index }}</h3>
              <div class="flex items-center mt-2">
                <button class="focus:outline-none text-gray-600 focus:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current icon icon-tabler icon-tabler-circle-minus" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                  </svg>
                </button>
                <span class="text-gray-800 mx-2">1</span>
                <button class="focus:outline-none text-gray-600 focus:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current icon icon-tabler icon-tabler-circle-plus" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <span class="text-gray-600">55$</span>
        </div>
      </div>
      <div class="mt-8">
        <form class="flex items-center justify-between" @submit.prevent="">
          <input class="border rounded-sm w-40 px-4 py-2 focus:outline-none focus:border-indigo-500" type="text" placeholder="Add code">
          <button class="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded">APPLY</button>
        </form>
      </div>
      <a class="flex items-center justify-center mt-4 px-3 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded cursor-pointer">
        CHECKOUT
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current icon icon-tabler icon-tabler-arrow-narrow-right" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="15" y1="16" x2="19" y2="12" />
          <line x1="15" y1="8" x2="19" y2="12" />
        </svg>
      </a>
    </div>
    <div v-if="isOpenSidebar" @click="toggleSidebar" class="fixed z-40 inset-0 opacity-25 bg-gray-900"></div>
  </div>
</template>

<script>
export default {
  name: 'EcommerceLayout',
  data () {
    return {
      isOpenSidebar: false
    }
  },
  methods: {
    toggleSidebar () {
      this.isOpenSidebar = !this.isOpenSidebar
    }
  }
}
</script>
