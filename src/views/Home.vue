<template>
  <div class="h-full w-full bg-gray-100">
    <header class="h-16 w-full border-b-2">
      <div class="flex justify-between items-center h-full w-4/6 mx-auto">
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
    <div class="flex h-full w-8/12 mx-auto">
      <aside class="h-full w-1/5">
        <nav class="w-full mb-6">
          <a class="flex items-center w-full h-10 px-2 rounded-sm cursor-pointer font-bold hover:text-indigo-500 hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 mr-2 icon icon-tabler icon-tabler-login" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M20 12h-13l3 -3m0 6l-3 -3" />
            </svg>
            Sign In/Up
          </a>
          <a class="flex items-center w-full h-10 px-2 rounded-sm cursor-pointer hover:text-indigo-500 hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 mr-2 icon icon-tabler icon-tabler-list" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <line x1="9" y1="6" x2="20" y2="6" />
              <line x1="9" y1="12" x2="20" y2="12" />
              <line x1="9" y1="18" x2="20" y2="18" />
              <line x1="5" y1="6" x2="5" y2="6.01" />
              <line x1="5" y1="12" x2="5" y2="12.01" />
              <line x1="5" y1="18" x2="5" y2="18.01" />
            </svg>
            Listings
          </a>
          <a class="flex items-center w-full h-10 px-2 rounded-sm cursor-pointer hover:text-indigo-500 hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 mr-2 icon icon-tabler icon-tabler-microphone" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <rect x="9" y="2" width="6" height="11" rx="3" />
              <path d="M5 10a7 7 0 0 0 14 0" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            Podcasts
          </a>
          <a class="flex items-center w-full h-10 px-2 rounded-sm cursor-pointer hover:text-indigo-500 hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 mr-2 icon icon-tabler icon-tabler-movie" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="4" x2="8" y2="20" />
              <line x1="16" y1="4" x2="16" y2="20" />
              <line x1="4" y1="8" x2="8" y2="8" />
              <line x1="4" y1="16" x2="8" y2="16" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="16" y1="8" x2="20" y2="8" />
              <line x1="16" y1="16" x2="20" y2="16" />
            </svg>
            Videos
          </a>
          <a class="flex items-center w-full h-10 px-2 rounded-sm cursor-pointer hover:text-indigo-500 hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 mr-2 icon icon-tabler icon-tabler-tag" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
              <circle cx="9" cy="9" r="2" />
            </svg>
            Tags
          </a>
          <a class="flex items-center w-full h-10 px-2 rounded-sm cursor-pointer text-gray-500 hover:bg-gray-300">
            <span class="w-6 h-6 mr-2"></span>
            More...
          </a>
        </nav>
        <nav class="w-full h-64 mb-6 overflow-y-scroll overflow-x-hidden">
          <header class="w-full px-2 py-2 text-xs tracking-tighter text-gray-600 font-bold">DESIGN YOUR EXPERIENCE</header>
          <div
            class="flex justify-between items-center w-full px-2 hover:bg-gray-300"
            v-for="(tag, index) in tags"
            :key='index'
            @mouseover="selectTag(index)"
            @mouseleave="selectTag(-1)">
              <a class="flex items-center w-full h-10 text-sm rounded-sm cursor-pointer hover:text-indigo-500">
                #{{ tag }}
              </a>
              <a v-if="selectedTag === index" class="flex items-center h-8 px-2 text-sm rounded-sm cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white ">
                Follow
              </a>
          </div>
        </nav>
        <div class="w-full">
          <h4 class="flex items-center w-full px-2 py-2 text-sm tracking-tighter text-black font-bold">
            Community Sponsors
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 icon icon-tabler icon-tabler-heart" viewBox="0 0 24 24" stroke-width="1.5" stroke="#E91E63" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
            </svg>
          </h4>
          <div class="grid grid-cols-1 gap-6"></div>
        </div>
        <div class="w-full"></div>
      </aside>
      <main class="h-full w-3/5"></main>
      <aside class="h-full w-1/5"></aside>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      selectedTag: -1,
      tags: [
        'javascript',
        'webdev',
        'beginners',
        'react',
        'tutorial',
        'python',
        'discuss',
        'career',
        'productivity',
        'android',
        'css',
        'node',
        'codenewbie',
        'devops',
        'showdev',
        'html',
        'typescript',
        'opensource',
        'github',
        'java',
        'testing',
        'linux',
        'angular',
        'machinelearning',
        'git',
        'aws',
        'security',
        'ruby',
        'vue',
        'php'
      ]
    }
  },
  methods: {
    selectTag (index) {
      this.selectedTag = index
    }
  }
}
</script>
