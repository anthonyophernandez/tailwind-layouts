<template>
  <div class="h-full w-full bg-gray-100">
    <header class="h-16 w-full border-b-2">
      <div class="flex justify-between items-center h-full w-8/12 mx-auto">
        <div class="flex w-2/6">
          <a class="flex justify-center items-center h-10 w-12 px-2 rounded-sm bg-black text-white text-lg font-bold cursor-pointer">DEV</a>
          <form class="h-10 w-full ml-4" @submit.prevent="">
            <input class="h-full w-full py-2 px-2 appearance-none border border-r-2 border-b-2 border-gray-400 rounded-sm focus:outline-none focus:border-indigo-500 placeholder-gray-600" type="text" placeholder="Search...">
          </form>
        </div>

        <div class="flex justify-between items-center h-full w-64">
          <button class="h-10 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-sm">Write a post</button>
          <a class="flex justify-center items-center h-10 w-10 rounded-full cursor-pointer hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 icon icon-tabler icon-tabler-square" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
          </a>
          <a class="flex justify-center items-center h-10 w-10 rounded-full cursor-pointer hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 icon icon-tabler icon-tabler-bell" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
          </a>
          <a class="flex justify-center items-center h-10 w-10 cursor-pointer hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 icon icon-tabler icon-tabler-menu" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>
