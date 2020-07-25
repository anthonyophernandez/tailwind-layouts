<template>
  <div class="w-full bg-gray-200">
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
          <button class="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current text-gray-600 icon icon-tabler icon-tabler-shopping-cart" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
          <input class="w-full border rounded-sm pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500 focus:shadow-outline" type="text" placeholder="Search">
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'EcommerceLayout'
}
</script>
