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
          <input class="w-full border border-gray-400  rounded-sm pl-10 pr-4 py-2 focus:outline-none focus:border-indigo-500 placeholder-gray-600" type="text" placeholder="Search">
        </div>
      </div>
    </header>
    <div v-show="isOpenSidebar" class="fixed z-50 inset-y-0 right-0 max-w-xs w-full h-full px-6 py-4 bg-white border-l border-gray-500 overflow-y-auto">
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
      <hr class="my-3 border-gray-400">
      <div class="grid gap-6">
        <div class="flex justify-between" v-for="index in 3" :key="index">
          <div class="flex">
            <div class="w-20 h-20 bg-indigo-500 rounded">
            </div>
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
          <input class="border border-gray-400 rounded-sm w-40 px-4 py-2 focus:outline-none focus:border-indigo-500 placeholder-gray-600" type="text" placeholder="Add code">
          <button class="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded">APPLY</button>
        </form>
      </div>
      <a class="flex items-center justify-center my-4 px-3 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded cursor-pointer">
        CHECKOUT
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current icon icon-tabler icon-tabler-arrow-narrow-right" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="15" y1="16" x2="19" y2="12" />
          <line x1="15" y1="8" x2="19" y2="12" />
        </svg>
      </a>
    </div>
    <div v-show="isOpenSidebar" @click="toggleSidebar" class="fixed z-40 inset-0 opacity-25 bg-gray-900"></div>
    <main class="my-8">
      <div class="mx-auto px-6">
        <div class="flex items-center justify-center">
          <div class="w-1/2 max-w-xl h-64 bg-indigo-500 rounded">
          </div>
          <div class="w-1/2 max-w-xl ml-6">
            <h3 class="text-gray-800 text-lg">PRODUCT #1</h3>
            <span class="text-gray-600">55$</span>
            <hr class="my-3 border-gray-400">
            <div class="mt-1">
              <span class="text-gray-800 text-sm">Count:</span>
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
            <div class="mt-3">
              <span class="text-gray-800 text-sm">Color:</span>
              <div class="flex items-center mt-2">
                <button @click="selectColor(1)" class="h-5 w-5 rounded-full bg-blue-500 mr-2 border-2 border-transparent focus:outline-none text-gray-600 focus:text-gray-800" :class="(1 === colorSelected)? 'border-gray-800' : ''">
                </button>
                <button @click="selectColor(2)" class="h-5 w-5 rounded-full bg-green-500 mr-2 border-2 border-transparent focus:border-gray-800 focus:outline-none text-gray-600 focus:text-gray-800" :class="(2 === colorSelected)? 'border-gray-800' : ''">
                </button>
                <button @click="selectColor(3)" class="h-5 w-5 rounded-full bg-pink-500 border-2 border-transparent focus:border-gray-800 focus:outline-none text-gray-600 focus:text-gray-800" :class="(3 === colorSelected)? 'border-gray-800' : ''">
                </button>
              </div>
            </div>
            <div class="flex items-center mt-5">
              <button class="bg-indigo-500 hover:bg-indigo-700 text-sm text-white py-2 px-6 rounded">Order Now</button>
              <button class="mx-2 p-2 hover:bg-gray-300 focus:outline-none text-gray-600 border rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current icon icon-tabler icon-tabler-shopping-cart" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <circle cx="9" cy="19" r="2" />
                  <circle cx="17" cy="19" r="2" />
                  <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <h3 class="text-2xl text-gray-700">More Products</h3>
          <div class="grid gap-3 grid-cols-4 mt-6">
            <div class="w-full rounded-lg shadow-md overflow-hidden" v-for="index in 4" :key="index">
              <div class="flex items-end justify-end w-full h-64 bg-indigo-500">
                <button class="mx-2 -mb-4 p-2 bg-indigo-500 hover:bg-indigo-700 focus:outline-none text-white border-2 border-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current icon icon-tabler icon-tabler-shopping-cart" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="9" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                  </svg>
                </button>
              </div>
              <div class="px-6 py-4">
                <h3 class="text-gray-800">PRODUCT #{{ index }}</h3>
                <span class="text-gray-600">55$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="h-16 border-t border-gray-400">
      <div class="flex items-center justify-between mx-auto px-6 py-3">
        <a class="cursor-pointer text-xl font-bold text-gray-500 hover:text-gray-600">Ecommerce</a>
        <p class="w-64 text-center text-gray-500">All rights reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'EcommerceLayout',
  data () {
    return {
      isOpenSidebar: false,
      colorSelected: 1
    }
  },
  methods: {
    toggleSidebar () {
      this.isOpenSidebar = !this.isOpenSidebar
    },
    selectColor (index) {
      this.colorSelected = index
    }
  }
}
</script>
