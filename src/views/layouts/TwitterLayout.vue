<template>
  <div class="flex w-full h-screen bg-gray-900">
    <header class="w-20 xl:w-64 h-full">
      <div class="flex flex-col items-center justify-between w-full h-full pt-1 pb-3 px-2 border-r border-gray-700 overflow-y-auto">
        <div class="flex flex-col justify-between xl:w-full">
          <a class="flex items-center justify-center p-2 cursor-pointer w-12 h-12 rounded-full hover:bg-blue-500 hover:bg-opacity-25">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current text-white icon icon-tabler icon-tabler-brand-twitter" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
            </svg>
          </a>
          <nav class="grid grid-cols-1 gap-2 mt-2 mb-4">
            <div class="flex items-center cursor-pointer rounded-full text-blue-500 hover:bg-blue-500 hover:bg-opacity-25">
              <a class="flex items-center justify-center w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-home-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <polyline points="5 12 3 12 12 3 21 12 19 12" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <rect x="10" y="12" width="4" height="4" />
                </svg>
              </a>
              <span class="hidden xl:block font-bold ml-2">
                Home
              </span>
            </div>
            <div class="flex items-center cursor-pointer hover:text-blue-500 text-white hover:bg-blue-500 hover:bg-opacity-25 rounded-full">
              <a class="flex items-center justify-center w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-search" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </a>
              <span class="hidden xl:block font-bold ml-2">
                Explore
              </span>
            </div>
            <div class="flex items-center cursor-pointer hover:text-blue-500 text-white hover:bg-blue-500 hover:bg-opacity-25 rounded-full">
              <a class="flex items-center justify-center w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-bell" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
              </a>
              <span class="hidden xl:block font-bold ml-2">
                Notifications
              </span>
            </div>
            <div class="flex items-center cursor-pointer hover:text-blue-500 text-white hover:bg-blue-500 hover:bg-opacity-25 rounded-full">
              <a class="flex items-center justify-center w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-mail" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </a>
              <span class="hidden xl:block font-bold ml-2">
                Messages
              </span>
            </div>
            <div class="flex items-center cursor-pointer hover:text-blue-500 text-white hover:bg-blue-500 hover:bg-opacity-25 rounded-full">
              <a class="flex items-center justify-center w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-bookmark" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                </svg>
              </a>
              <span class="hidden xl:block font-bold ml-2">
                Bookmarks
              </span>
            </div>
            <div class="flex items-center cursor-pointer hover:text-blue-500 text-white hover:bg-blue-500 hover:bg-opacity-25 rounded-full">
              <a class="flex items-center justify-center w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-notes" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <rect x="5" y="3" width="14" height="18" rx="2" />
                  <line x1="9" y1="7" x2="15" y2="7" />
                  <line x1="9" y1="11" x2="15" y2="11" />
                  <line x1="9" y1="15" x2="13" y2="15" />
                </svg>
              </a>
              <span class="hidden xl:block font-bold ml-2">
                Lists
              </span>
            </div>
            <div class="flex items-center cursor-pointer hover:text-blue-500 text-white hover:bg-blue-500 hover:bg-opacity-25 rounded-full">
              <a class="flex items-center justify-center w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-user" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <circle cx="12" cy="7" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </a>
              <span class="hidden xl:block font-bold ml-2">
                Profile
              </span>
            </div>
            <div class="flex items-center cursor-pointer hover:text-blue-500 text-white hover:bg-blue-500 hover:bg-opacity-25 rounded-full">
              <a class="flex items-center justify-center w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-dots-circle-horizontal" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <circle cx="12" cy="12" r="9" />
                  <line x1="8" y1="12" x2="8" y2="12.01" />
                  <line x1="12" y1="12" x2="12" y2="12.01" />
                  <line x1="16" y1="12" x2="16" y2="12.01" />
                </svg>
              </a>
              <span class="hidden xl:block font-bold ml-2">
                More
              </span>
            </div>
          </nav>
          <button class="flex items-center justify-center xl:w-full w-12 h-12 py-1 px-4 text-white rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none">
            <span class="block xl:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current icon icon-tabler icon-tabler-pencil" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
              </svg>
            </span>
            <span class="font-bold hidden xl:block">Tweet</span>
          </button>
        </div>
        <div class="flex items-center justify-between xl:w-full mt-8 rounded-full hover:bg-blue-500 hover:bg-opacity-25 cursor-pointer">
          <div class="flex items-center">
            <a class="flex items-center justify-center cursor-pointer w-12 h-12">
              <div class="h-8 w-8 rounded-full bg-white"></div>
            </a>
            <div class="hidden xl:block text-sm">
              <p class="font-semibold text-white">Ilon Mask</p>
              <p class="text-gray-600">@ilonmask</p>
            </div>
          </div>
          <span class="hidden xl:block text-white mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 stroke-current icon icon-tabler icon-tabler-chevron-down">
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
      </div>
    </header>
    <main class="flex w-full h-full overflow-y-auto">
      <div class="w-full lg:w-1/2">
        <div class="flex items-center justify-between cursor-pointer h-12 w-full px-4 py-3 border-r border-gray-700">
          <h2 class="text-xl font-semibold text-white">Latest Tweets</h2>
          <a class="flex items-center justify-center w-10 h-10 rounded-full text-blue-500 hover:bg-blue-500 hover:bg-opacity-25">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current icon icon-tabler icon-tabler-star" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
            </svg>
          </a>
        </div>
        <hr class="border-gray-700">
        <div class="flex w-full px-4 py-3 border-r border-gray-700">
          <div class="w-12">
            <div class="h-12 w-12 rounded-full bg-white hover:bg-gray-300 cursor-pointer"></div>
          </div>
          <div class="w-full ml-4">
            <textarea class="h-12 w-full resize-none bg-transparent text-white text-lg placeholder-gray-400" placeholder="What's happening?"/>
            <div class="flex justify-between mt-2">
              <div class="flex items-center justify-between w-32">
                <a class="flex items-center justify-center cursor-pointer w-8 h-8 rounded-full text-blue-500 hover:bg-blue-500 hover:bg-opacity-25">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current icon icon-tabler icon-tabler-photo" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <line x1="15" y1="8" x2="15.01" y2="8" />
                    <rect x="4" y="4" width="16" height="16" rx="3" />
                    <path d="M4 15l4 -4a3 5 0 0 1 3 0l 5 5" />
                    <path d="M14 14l1 -1a3 5 0 0 1 3 0l 2 2" />
                  </svg>
                </a>
                <a class="flex items-center justify-center cursor-pointer w-8 h-8 rounded-full text-blue-500 hover:bg-blue-500 hover:bg-opacity-25">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current icon icon-tabler icon-tabler-movie" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                </a>
                <a class="flex items-center justify-center cursor-pointer w-8 h-8 rounded-full text-blue-500 hover:bg-blue-500 hover:bg-opacity-25">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current icon icon-tabler icon-tabler-mood-smile" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="10" x2="9.01" y2="10" />
                    <line x1="15" y1="10" x2="15.01" y2="10" />
                    <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                  </svg>
                </a>
              </div>
              <button class="bg-blue-500 px-8 py-2 text-white font-semibold rounded-full focus:outline-none">Tweet</button>
            </div>
          </div>
        </div>
        <hr class="border-4 border-gray-800">
        <div class="flex w-full px-4 py-3 cursor-pointer hover:bg-gray-800 border-b border-r border-gray-700" v-for="index in 12" :key="index">
          <div class="w-12">
            <div class="h-12 w-12 rounded-full bg-indigo-500 hover:bg-indigo-600 cursor-pointer"></div>
          </div>
          <div class="w-full ml-4">
            <p class="flex justify-between w-full text-white cursor-pointer">
              <span>
                <span class="font-semibold hover:underline">Ilon Mask </span>
                <span class="text-gray-500">@ilonmask &middot; 14m</span>
              </span>
              <span class="flex items-center justify-center w-6 h-6 rounded-full hover:bg-blue-500 hover:bg-opacity-25 text-gray-500 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current icon icon-tabler icon-tabler-chevron-down" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </p>
            <p class="w-full text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet molestiae veritatis laudantium asperiores saepe ipsum exercitationem, voluptatibus esse.</p>
            <div class="flex items-center justify-between w-full mt-2">
              <div class="flex items-center cursor-pointer text-gray-500 hover:text-blue-500">
                <a class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-blue-500 hover:bg-opacity-25">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current icon icon-tabler icon-tabler-message-circle" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                    <line x1="12" y1="12" x2="12" y2="12.01" />
                    <line x1="8" y1="12" x2="8" y2="12.01" />
                    <line x1="16" y1="12" x2="16" y2="12.01" />
                  </svg>
                </a>
                <span class="ml-1 text-sm">76</span>
              </div>
              <div class="flex items-center cursor-pointer text-gray-500 hover:text-green-500">
                <a class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-green-500 hover:bg-opacity-25">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current icon icon-tabler icon-tabler-arrows-sort" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M3 9l4-4l4 4m-4 -4v14" />
                    <path d="M21 15l-4 4l-4-4m4 4v-14" />
                  </svg>
                </a>
                <span class="ml-1 text-sm">614</span>
              </div>
              <div class="flex items-center cursor-pointer text-gray-500 hover:text-red-500">
                <a class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-red-500 hover:bg-opacity-25">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current icon icon-tabler icon-tabler-heart" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                  </svg>
                </a>
                <span class="ml-1 text-sm">1.5K</span>
              </div>
              <a class="flex items-center justify-center cursor-pointer w-8 h-8 rounded-full text-gray-500 hover:text-blue-500 hover:bg-blue-500 hover:bg-opacity-25">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current icon icon-tabler icon-tabler-upload" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <polyline points="7 9 12 4 17 9" />
                    <line x1="12" y1="4" x2="12" y2="16" />
                  </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:block w-1/2 py-1 px-6">
        <div class="relative w-full mx-auto mb-4">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current icon icon-tabler icon-tabler-search" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </span>
          <input class="w-full h-10 pl-10 pr-4 py-2 text-white bg-gray-700 bg-opacity-25 focus:bg-transparent border border-transparent focus:border-blue-500 rounded-full focus:outline-none placeholder-gray-500" type="text" placeholder="Search Twitter">
        </div>
        <div class="w-full mb-4 text-white bg-gray-700 bg-opacity-25 rounded-lg overflow-hidden">
          <div class="px-4 py-3">
            <h2 class="text-xl font-semibold text-white">What's happening</h2>
          </div>
          <hr class="border-gray-700">
          <div class="px-4 py-3 cursor-pointer hover:bg-gray-800 border-b border-gray-700" v-for="index in 4" :key="index">
            <p class="flex justify-between">
              <span class="text-gray-500 text-sm">Trending</span>
              <span class="flex items-center justify-center w-6 h-6 rounded-full hover:bg-blue-500 hover:bg-opacity-25 text-gray-500 hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 stroke-current icon icon-tabler icon-tabler-chevron-down">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </p>
            <p class="text-white font-semibold text-sm">Ilon Mask</p>
            <p class="text-gray-500 text-sm">11.K Tweets</p>
          </div>
          <div class="hover:bg-gray-800 px-4 py-4">
            <h2 class="cursor-pointer text-base text-blue-500">Show More</h2>
          </div>
        </div>
        <div class="w-full mb-4 text-white bg-gray-700 bg-opacity-25 rounded-lg overflow-hidden">
          <div class="px-4 py-3">
            <h2 class="text-xl font-semibold text-white">Who to follow</h2>
          </div>
          <hr class="border-gray-700">
          <div class="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-800 border-b border-gray-700" v-for="index in 2" :key="index">
            <div class="flex">
              <div class="h-12 w-12 rounded-full bg-indigo-500 hover:bg-indigo-600 cursor-pointer"></div>
              <div class="ml-2">
                <p class="font-semibold hover:underline">Ilon Mask</p>
                <p class="text-gray-500">@ilonmask</p>
              </div>
            </div>
            <button class="h-8 px-4 py-1 hover:bg-blue-500 hover:bg-opacity-25 text-sm text-blue-500 border border-blue-500 font-semibold rounded-full focus:outline-none">Follow</button>
          </div>
          <div class="hover:bg-gray-800 px-4 py-4">
            <h2 class="cursor-pointer text-base text-blue-500">Show More</h2>
          </div>
        </div>
        <div class="px-4 w-full">
          <div class="flex w-full mb-1">
            <a class="cursor-pointer text-sm text-gray-600 hover:underline">Terms</a>
            <a class="cursor-pointer ml-2 text-sm text-gray-600 hover:underline">Privacy policy</a>
            <a class="cursor-pointer ml-2 text-sm text-gray-600 hover:underline">Cookies</a>
            <a class="cursor-pointer ml-2 text-sm text-gray-600 hover:underline">Ads info</a>
            <a class="flex items-center cursor-pointer ml-2 text-sm text-gray-600 hover:underline">
              More
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 stroke-current icon icon-tabler icon-tabler-chevron-down">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </a>
          </div>
          <p class="text-sm text-gray-600">© 2020 Twitter, Inc.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'TwitterLayout'
}
</script>
