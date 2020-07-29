<template>
  <div class="flex w-full bg-gray-900">
    <header class="w-20 h-screen">
      <div class="flex flex-col items-center justify-between w-full h-full pt-1 pb-3 px-2 border-r border-gray-700 overflow-y-auto">
        <div class="flex flex-col justify-between">
          <a class="flex items-center justify-center cursor-pointer w-12 h-12 rounded-full hover:bg-blue-500 hover:bg-opacity-25">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current text-white icon icon-tabler icon-tabler-brand-twitter" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
            </svg>
          </a>
          <nav class="grid grid-cols-1 gap-2 mt-2 mb-4">
            <a class="flex items-center justify-center cursor-pointer w-12 h-12 rounded-full text-blue-500 hover:bg-blue-500 hover:bg-opacity-25">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-home-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <rect x="10" y="12" width="4" height="4" />
              </svg>
            </a>
            <a class="flex items-center justify-center cursor-pointer w-12 h-12 rounded-full text-white hover:text-blue-500 hover:bg-blue-500 hover:bg-opacity-25">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-search" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </a>
            <a class="flex items-center justify-center cursor-pointer w-12 h-12 rounded-full text-white hover:text-blue-500 hover:bg-blue-500 hover:bg-opacity-25">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-bell" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
            </a>
            <a class="flex items-center justify-center cursor-pointer w-12 h-12 rounded-full text-white hover:text-blue-500 hover:bg-blue-500 hover:bg-opacity-25">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-mail" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </a>
            <a class="flex items-center justify-center cursor-pointer w-12 h-12 rounded-full text-white hover:text-blue-500 hover:bg-blue-500 hover:bg-opacity-25">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-bookmark" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </a>
            <a class="flex items-center justify-center cursor-pointer w-12 h-12 rounded-full text-white hover:text-blue-500 hover:bg-blue-500 hover:bg-opacity-25">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-notes" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <rect x="5" y="3" width="14" height="18" rx="2" />
                <line x1="9" y1="7" x2="15" y2="7" />
                <line x1="9" y1="11" x2="15" y2="11" />
                <line x1="9" y1="15" x2="13" y2="15" />
              </svg>
            </a>
            <a class="flex items-center justify-center cursor-pointer w-12 h-12 rounded-full text-white hover:text-blue-500 hover:bg-blue-500 hover:bg-opacity-25">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-user" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </a>
            <a class="flex items-center justify-center cursor-pointer w-12 h-12 rounded-full text-white hover:text-blue-500 hover:bg-blue-500 hover:bg-opacity-25">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-dots-circle-horizontal" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <circle cx="12" cy="12" r="9" />
                <line x1="8" y1="12" x2="8" y2="12.01" />
                <line x1="12" y1="12" x2="12" y2="12.01" />
                <line x1="16" y1="12" x2="16" y2="12.01" />
              </svg>
            </a>
          </nav>
          <button class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current text-white icon icon-tabler icon-tabler-pencil" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
            </svg>
          </button>
        </div>
        <div class="mt-8">
          <a class="flex items-center justify-center cursor-pointer w-12 h-12 rounded-full hover:bg-blue-500 hover:bg-opacity-25">
            <div class="h-8 w-8 rounded-full bg-white"></div>
          </a>
        </div>
      </div>
    </header>
    <main class="w-full"></main>
  </div>
</template>

<script>
export default {
  name: 'TwitterLayout'
}
</script>
