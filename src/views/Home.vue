<template>
  <div class="w-full bg-gray-200" :class="(isLeftSidebarOpen || isRightSidebarOpen) ? 'h-screen overflow-y-hidden' : ''">
    <header class="fixed z-50 h-16 w-full bg-gray-100 border-b border-gray-400">
      <div class="flex justify-between items-center h-full w-full xl:w-3/4 mx-auto">
        <div class="flex w-5/6 sm:w-1/2 ml-1 mr-2">
          <a class="cursor-pointer">
            <div class="flex justify-center items-center h-10 w-12 px-2 rounded-sm bg-black text-white text-lg font-bold cursor-pointer">DEV</div>
          </a>
          <form class="h-10 w-full ml-4" @submit.prevent="">
            <input class="h-full w-full py-2 px-2 appearance-none border border-r-2 border-b-2 border-gray-400 rounded-sm focus:outline-none focus:border-indigo-500 placeholder-gray-600" type="text" placeholder="Search...">
          </form>
        </div>

        <div class="flex justify-end sm:justify-between items-center h-full w-auto">
          <button class="h-10 mr-2 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-sm hidden sm:block">Write a post</button>
          <a class="flex justify-center items-center h-10 w-10 mr-2 rounded-full cursor-pointer hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 icon icon-tabler icon-tabler-square" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
          </a>
          <a class="flex justify-center items-center h-10 w-10 mr-2 rounded-full cursor-pointer hover:bg-gray-300">
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
    <div class="h-16 w-full"></div>
    <div class="relative flex h-full w-full xl:w-3/4 md:px-2 mx-auto bg-gray-200 mb-2">
      <aside class="h-full md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 md:block bg-gray-200" :class="openLeftClass()">
        <nav class="w-full mb-6">
          <a class="flex items-center w-full h-10 px-2 rounded-sm cursor-pointer font-bold hover:text-indigo-700 hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 mr-2 icon icon-tabler icon-tabler-login" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M20 12h-13l3 -3m0 6l-3 -3" />
            </svg>
            Sign In/Up
          </a>
          <a class="flex items-center w-full h-10 px-2 rounded-sm cursor-pointer hover:text-indigo-700 hover:bg-gray-300">
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
          <a class="flex items-center w-full h-10 px-2 rounded-sm cursor-pointer hover:text-indigo-700 hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 mr-2 icon icon-tabler icon-tabler-microphone" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <rect x="9" y="2" width="6" height="11" rx="3" />
              <path d="M5 10a7 7 0 0 0 14 0" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            Podcasts
          </a>
          <a class="flex items-center w-full h-10 px-2 rounded-sm cursor-pointer hover:text-indigo-700 hover:bg-gray-300">
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
          <a class="flex items-center w-full h-10 px-2 rounded-sm cursor-pointer hover:text-indigo-700 hover:bg-gray-300">
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
              <a class="flex items-center w-full h-10 text-sm rounded-sm cursor-pointer hover:text-indigo-700">
                #{{ tag }}
              </a>
              <a v-if="selectedTag === index" class="flex items-center h-8 px-2 text-sm rounded-sm cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white ">
                Follow
              </a>
          </div>
        </nav>
        <div class="w-full mb-6">
          <h4 class="flex items-center w-full px-2 py-2 text-sm tracking-tighter text-black font-bold">
            Community Sponsors
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 icon icon-tabler icon-tabler-heart" viewBox="0 0 24 24" stroke-width="1.5" stroke="#E91E63" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
            </svg>
          </h4>
          <div class="grid grid-cols-1 gap-6 w-full px-2 mb-4">
            <div class="w-full">
              <a class="w-full text-sm text-blue-500 font-bold cursor-pointer">Digital Ocean</a>
              <p class="w-full mt-2 text-sm text-gray-600">The simplest cloud platform for developers & teams.</p>
            </div>
            <div class="w-full">
              <a class="w-full text-sm text-gray-900 font-bold cursor-pointer">CloudBees Rollout</a>
              <p class="w-full mt-2 text-sm text-gray-600">Release new features continuously. Without any of the risk.</p>
            </div>
            <div class="w-full">
              <a class="w-full text-sm text-gray-700 font-bold cursor-pointer">DIVERSIFY TECH</a>
              <p class="w-full mt-2 text-sm text-gray-600">We connect underrepresented people in tech to opportunities..</p>
            </div>
            <a class="flex justify-center items-center w-full h-10 bg-gray-500 hover:bg-gray-600 text-sm cursor-pointer rounded-sm">Become a sponsor</a>
          </div>
          <div class="w-full px-2">
            <a class="cursor-pointer">
              <img class="w-full h-56 bg-indigo-500 rounded-sm">
            </a>
            <h3 class="w-full text-center text-md text-indigo-700 font-bold"><a class="cursor-pointer">A Book for Junior Devs</a></h3>
          </div>
        </div>
        <div v-if="isLeftSidebarOpen" class="h-16 w-full"></div>
      </aside>
      <main class="h-full w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/2 p-2 md:px-3">
        <header class="flex items-center justify-between h-10 w-full px-2 mb-2">
          <button @click="toggleLeftSideBar" class="flex md:hidden justify-center items-center h-10 w-10 mr-2 rounded-sm focus:outline-none hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 icon icon-tabler icon-tabler-database" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
              <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
              <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
            </svg>
          </button>
          <div class="flex items-center justify-between w-full mr-2">
            <h2 class="py-2 text-lg font-bold mr-2">Posts</h2>
            <nav class="hidden sm:flex h-10">
              <a class="cursor-pointer rounded-sm border-b-2 border-indigo-500 hover:bg-gray-300 hover:text-indigo-500 p-2 mr-2">Feed</a>
              <a class="cursor-pointer rounded-sm hover:bg-gray-300 hover:text-indigo-500 p-2 mr-2">Week</a>
              <a class="cursor-pointer rounded-sm hover:bg-gray-300 hover:text-indigo-500 p-2 mr-2">Month</a>
              <a class="cursor-pointer rounded-sm hover:bg-gray-300 hover:text-indigo-500 p-2 mr-2">Year</a>
              <a class="cursor-pointer rounded-sm hover:bg-gray-300 hover:text-indigo-500 p-2 mr-2">Infinity</a>
              <a class="cursor-pointer rounded-sm hover:bg-gray-300 hover:text-indigo-500 p-2">Latest</a>
            </nav>
            <div class="relative block sm:hidden">
              <select class="appearance-none bg-gray-100 border border-r-2 border-b-2 border-gray-500 text-black py-2 px-2 pr-8 rounded leading-tight focus:border-indigo-500 focus:outline-none">
                <option value="feed" selected>Feed</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
                <option value="infinity">Infinity</option>
                <option value="latest">Latest</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 icon icon-tabler icon-tabler-caret-down" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" />
                </svg>
              </div>
            </div>
          </div>
          <button @click="toggleRightSideBar" class="flex lg:hidden justify-center items-center h-10 w-10 rounded-sm focus:outline-none hover:bg-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 icon icon-tabler icon-tabler-bolt" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
            </svg>
          </button>
        </header>
        <article
          class="w-full h-48 bg-gray-100 border border-gray-400 md:mb-2"
          v-for="i in 30"
          :key="i">
          <div class="w-full h-full flex flex-col justify-between p-3">
            <div class="flex items-center h-8 mb-1">
              <a class="cursor-pointer">
                <div class="w-8 h-8 bg-gray-500 rounded-full"></div>
              </a>
              <div class="flex flex-col justify-center items-start ml-2">
                <p class="text-sm text-gray-600 hover:text-gray-900">
                  <a class="cursor-pointer">
                    {{ story.author }}
                  </a>
                </p>
                <a class="text-xs text-gray-600 hover:text-gray-900 cursor-pointer">
                    {{ story.date }}
                  </a>
              </div>
            </div>
            <div class="flex flex-col justify-between h-full ml-10">
              <h2 class="text-black hover:text-indigo-700 text-2xl font-bold mb-1">
                <a class="cursor-pointer">
                  {{ story.title }}
                </a>
              </h2>
              <div class="w-full mb-2">
                <a class="cursor-pointer mr-3" v-for="tag in story.tags" :key="tag">
                  <span class="text-sm md:text-base text-gray-600 hover:text-gray-900">#{{ tag }}</span>
                </a>
              </div>
              <div class="flex justify-between items-center w-full">
                <div class="flex">
                  <a class="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer py-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 mr-1 inline icon icon-tabler icon-tabler-heart stroke-current" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z"/>
                      <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                    </svg>
                    <span class="text-sm">
                      {{ story.reactions }}
                      <span class="hidden sm:inline">reactions</span>
                    </span>
                  </a>
                  <a class="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 mr-1 inline icon icon-tabler icon-tabler-message-circle stroke-current" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z"/>
                      <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                      <line x1="12" y1="12" x2="12" y2="12.01" />
                      <line x1="8" y1="12" x2="8" y2="12.01" />
                      <line x1="16" y1="12" x2="16" y2="12.01" />
                    </svg>
                    <span class="text-sm">
                      {{ story.comments }}
                       <span class="hidden sm:inline">comments</span>
                    </span>
                  </a>
                </div>
                <div class="flex items-center justify-between w-32">
                  <p class="text-xs">{{ story.time }}</p>
                  <button class="h-8 bg-gray-400 hover:bg-gray-500 text-gray-700 hover:text-gray-900 px-2 rounded-sm">Save</button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <aside class="h-full lg:w-1/4 xl:w-1/4 lg:block p-2 bg-gray-200" :class="openRightClass()">
        <section class="w-full mb-4 bg-gray-100 border border-gray-400 rounded-sm">
          <header class="w-full px-3 py-3 border-b">
            <h3 class="text-base font-bold">Join DEV</h3>
          </header>
          <div class="grid gap-2 w-full px-3 py-4">
            <a class="flex justify-center items-center w-full h-12 py-2 px-4 bg-gray-900 hover:bg-black rounded-sm text-sm text-gray-100 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 mr-2 icon icon-tabler icon-tabler-brand-github" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
              </svg>
              Sign In with GitHub
            </a>
            <a class="flex justify-center items-center w-full h-12 py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-sm text-sm text-gray-100 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 mr-2 icon icon-tabler icon-tabler-brand-twitter" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
              </svg>
              Sign In with Twitter
            </a>
          </div>
        </section>
        <section class="w-full mb-4 bg-gray-100 border border-gray-400 rounded-sm">
          <header class="flex justify-between w-full px-3 py-3 border-b">
            <h3 class="text-base font-bold">Listings</h3>
            <a class="text-sm text-indigo-600 hover:text-indigo-700 cursor-pointer">See all</a>
          </header>
          <div class="grid gap-2 w-full">
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">Hello World!</div>
              <div class="text-gray-600 text-sm">forhire</div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">What Should You Know Before Using Svelte?</div>
              <div class="text-gray-600 text-sm">education</div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">How To Debug React Native Apps Like A Pro? (Tools And Best Practices)</div>
              <div class="text-gray-600 text-sm">education</div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">Ruby on Rails vs Node.js – The Right Approach To Web Development</div>
              <div class="text-gray-600 text-sm">education</div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">Desktop software anti-crack protection, licensing & time-trial solution</div>
              <div class="text-gray-600 text-sm">collabs</div>
            </a>
            <a class="w-full h-8 text-sm text-center cursor-pointer hover:text-indigo-700">
              Create a Listing
            </a>
          </div>
        </section>
        <section class="w-full mb-4 bg-gray-100 border border-gray-400 rounded-sm">
          <header class="w-full px-3 py-3 border-b">
            <h3 class="text-base font-bold">
              <a  class="hover:text-indigo-700 cursor-pointer">
                #help
              </a>
            </h3>
          </header>
          <div class="grid gap-2 w-full">
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">Why I am unable to assert that an email has been sent from a laravel job?</div>
              <div><span class="p-1 bg-indigo-600 rounded-sm text-gray-100 text-xs">New</span></div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">How do you deal with SEO in React/SPAs?</div>
              <div class="text-gray-600 text-sm">Comments: 2</div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">Undo Monorepo</div>
              <div><span class="p-1 bg-indigo-600 rounded-sm text-gray-100 text-xs">New</span></div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">Building a big MERN project</div>
              <div class="text-gray-600 text-sm">Comments: 1</div>
            </a>
          </div>
        </section>
        <section class="w-full mb-4 bg-gray-100 border border-gray-400 rounded-sm">
          <header class="w-full px-3 py-3 border-b">
            <h3 class="text-base font-bold">
              <a  class="hover:text-indigo-700 cursor-pointer">
                #challenge
              </a>
            </h3>
          </header>
          <div class="grid gap-2 w-full">
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">[Challenge] FizzBuzz without if/else</div>
              <div class="text-gray-600 text-sm">Comments: 88</div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">30 Days of Python - Day 30 -Free Python Resources</div>
              <div><span class="p-1 bg-indigo-600 rounded-sm text-gray-100 text-xs">New</span></div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">Daily Challenge #270 - Fix String Case</div>
              <div class="text-gray-600 text-sm">Comments: 11</div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">Solving "DNA Pairing" / freeCodeCamp Algorithm Challenges</div>
              <div><span class="p-1 bg-indigo-600 rounded-sm text-gray-100 text-xs">New</span></div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">Daily Coding Challenge #67</div>
              <div><span class="p-1 bg-indigo-600 rounded-sm text-gray-100 text-xs">New</span></div>
            </a>
          </div>
        </section>
        <section class="w-full mb-4 bg-gray-100 border border-gray-400 rounded-sm">
          <header class="w-full px-3 py-3 border-b">
            <h3 class="text-base font-bold">
              <a  class="hover:text-indigo-700 cursor-pointer">
                #discuss
              </a>
            </h3>
          </header>
          <div class="grid gap-2 w-full">
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">What's the minimum a full stack dev should know?</div>
              <div class="text-gray-600 text-sm">Comments: 9</div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">What are things a good programmer should NEVER ask?</div>
              <div class="text-gray-600 text-sm">Comments: 3</div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">Is linux good enough for everyday programming?</div>
              <div class="text-gray-600 text-sm">Comments: 101</div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">What new hobbies have you picked up lately?</div>
              <div class="text-gray-600 text-sm">Comments: 19</div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">How do you admin your Tokens on Github?</div>
              <div class="text-gray-600 text-sm">Comments: 1</div>
            </a>
          </div>
        </section>
        <section class="w-full mb-4 bg-gray-100 border border-gray-400 rounded-sm">
          <header class="w-full px-3 py-3 border-b">
            <h3 class="text-base font-bold">
              <a  class="hover:text-indigo-700 cursor-pointer">
                #meta
              </a>
            </h3>
          </header>
          <div class="grid gap-2 w-full">
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">Transform code screencasts into markdown tutorials for Dev and GitHub</div>
              <div class="text-gray-600 text-sm">Comments: 2</div>
            </a>
          </div>
        </section>
        <section class="w-full mb-4 bg-gray-100 border border-gray-400 rounded-sm">
          <header class="w-full px-3 py-3 border-b">
            <h3 class="text-base font-bold">
              <a  class="hover:text-indigo-700 cursor-pointer">
                #watercolor
              </a>
            </h3>
          </header>
          <div class="grid gap-2 w-full">
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">What new hobbies have you picked up lately?</div>
              <div class="text-gray-600 text-sm">Comments: 19</div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">Awesome github readme templates collection</div>
              <div><span class="p-1 bg-indigo-600 rounded-sm text-gray-100 text-xs">New</span></div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">If a "binary digit" is called a "bit", then what's a hexatridecimal (base-36) digit called?</div>
              <div class="text-gray-600 text-sm">Comments: 3</div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">Add a visitor count on your GitHub profile with one line of Markdown</div>
              <div class="text-gray-600 text-sm">Comments: 23</div>
            </a>
            <a class="w-full px-3 py-3 cursor-pointer hover:text-indigo-700 border-b">
              <div class="text-base">I fucking love coding</div>
              <div class="text-gray-600 text-sm">Comments: 11</div>
            </a>
          </div>
        </section>
        <section v-if="!isRightSidebarOpen" class="w-full mb-4 border-b border-gray-400">
          <header class="w-full px-3 py-3">
            <h3 class="text-base font-bold">
              trending guides/resources
            </h3>
          </header>
          <div class="grid gap-2 w-full">
            <a class="w-full px-3 py-3 cursor-pointer rounded-sm hover:bg-white hover:text-indigo-700" v-for="item in trendingResources" :key="item">
              <div class="text-base">{{ item }}</div>
            </a>
          </div>
        </section>
        <section v-if="!isRightSidebarOpen" class="w-full mb-4 border-b border-gray-400">
          <header class="w-full px-3 py-3">
            <h3 class="text-base font-bold">
              recently queried
            </h3>
          </header>
          <div class="grid gap-2 w-full">
            <a class="w-full px-3 py-3 cursor-pointer rounded-sm hover:bg-white hover:text-indigo-700"  v-for="item in recentlyQueried" :key="item">
              <div class="text-base">{{ item }}</div>
            </a>
          </div>
        </section>
        <div v-if="isRightSidebarOpen" class="h-16 w-full"></div>
      </aside>
    </div>
    <footer class="w-full bg-gray-400 px-2 py-4 sm:py-8 lg:py-10">
      <div class="flex flex-col-reverse md:flex-row justify-between w-full xl:w-3/4 m-auto">
        <div class="grid gap-2 w-full md:w-56 px-2">
          <a class="cursor-pointer">
            <div class="flex justify-center items-center h-10 w-12 rounded-sm bg-black text-white text-lg font-bold cursor-pointer">DEV</div>
          </a>
          <p class="text-sm">A constructive and inclusive social network. Open source and radically transparent.</p>
          <div class="flex items-center">
            <a class="cursor-pointer mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 icon icon-tabler icon-tabler-brand-twitter text-gray-700 hover:text-gray-900 stroke-current" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
              </svg>
            </a>
            <a class="cursor-pointer mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 icon icon-tabler icon-tabler-brand-facebook text-gray-700 hover:text-gray-900 stroke-current" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>
            <a class="cursor-pointer mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 icon icon-tabler icon-tabler-brand-github text-gray-700 hover:text-gray-900 stroke-current" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
              </svg>
            </a>
            <a class="cursor-pointer mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 icon icon-tabler icon-tabler-brand-instagram text-gray-700 hover:text-gray-900 stroke-current" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </a>
            <a class="cursor-pointer mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 icon icon-tabler icon-tabler-brand-telegram text-gray-700 hover:text-gray-900 stroke-current" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
              </svg>
            </a>
          </div>
          <p class="text-xs text-gray-700">DEV Community copyright 2016 - 2020</p>
          <p class="text-xs text-gray-700">Built on <span class="cursor-pointer text-indigo-700">Forem</span> — the <span class="cursor-pointer text-indigo-700">open source</span> software that powers <span class="cursor-pointer text-indigo-700">DEV</span> and other inclusive communities.</p>
          <p class="text-xs text-gray-700">Made with love and <span class="cursor-pointer text-indigo-700">Ruby on Rails.</span></p>
        </div>
        <nav class="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full mb-4 md:ml-16">
          <div>
            <a class="block cursor-pointer hover:text-indigo-700 hover:bg-gray-500 rounded-sm py-2 px-2">Home</a>
            <a class="block cursor-pointer hover:text-indigo-700 hover:bg-gray-500 rounded-sm py-2 px-2">Listings</a>
            <a class="block cursor-pointer hover:text-indigo-700 hover:bg-gray-500 rounded-sm py-2 px-2">Podcasts</a>
            <a class="block cursor-pointer hover:text-indigo-700 hover:bg-gray-500 rounded-sm py-2 px-2">Videos</a>
            <a class="block cursor-pointer hover:text-indigo-700 hover:bg-gray-500 rounded-sm py-2 px-2">Tags</a>
            <a class="block cursor-pointer hover:text-indigo-700 hover:bg-gray-500 rounded-sm py-2 px-2 font-bold">Sign In/Up</a>
          </div>
          <div>
            <a class="block cursor-pointer hover:text-indigo-700 hover:bg-gray-500 rounded-sm py-2 px-2">Code of Conduct</a>
            <a class="block cursor-pointer hover:text-indigo-700 hover:bg-gray-500 rounded-sm py-2 px-2">FAQ</a>
            <a class="block cursor-pointer hover:text-indigo-700 hover:bg-gray-500 rounded-sm py-2 px-2">About</a>
            <a class="block cursor-pointer hover:text-indigo-700 hover:bg-gray-500 rounded-sm py-2 px-2">Privacy policy</a>
            <a class="block cursor-pointer hover:text-indigo-700 hover:bg-gray-500 rounded-sm py-2 px-2">Terms of use</a>
            <a class="block cursor-pointer hover:text-indigo-700 hover:bg-gray-500 rounded-sm py-2 px-2">Contact</a>
          </div>
          <div>
            <a class="block cursor-pointer hover:text-indigo-700 hover:bg-gray-500 rounded-sm py-2 px-2">Sponsors</a>
            <a class="block cursor-pointer hover:text-indigo-700 hover:bg-gray-500 rounded-sm py-2 px-2">DEV Shop</a>
          </div>
        </nav>
      </div>

    </footer>
    <div v-if="isLeftSidebarOpen" @click="toggleLeftSideBar" class="fixed z-40 inset-0 opacity-25 bg-gray-900"></div>
    <div v-if="isRightSidebarOpen" @click="toggleRightSideBar" class="fixed z-40 inset-0 opacity-25 bg-gray-900"></div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      isLeftSidebarOpen: false,
      isRightSidebarOpen: false,
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
      ],
      trendingResources: [
        "Updating to the New WSL 2: Is It Really 20x Faster? - A User's Installation Guide",
        'How To Create A GitHub Profile README',
        'Design Github profile using README.md',
        'Replacing master with main in Github',
        'Is using Linux really productive?',
        'Are you in the GitHub Arctic Code Vault?',
        '35+ Free React templates and themes',
        'How I chose a programming language and beat bad habits',
        'How to add a README to your GitHub profile',
        'Simple REST API with Deno',
        'npm ERR! Unexpected end of JSON input while parsing near',
        'What Is The Best Deno Web Framework?',
        'Replacing master in git',
        '30 Days of Python - Day 1 - Introduction',
        'ExpressJS for Deno',
        'Speed up your development with this new VS Code extension',
        "No more HTML coding, please. Let's make layout to HTML real",
        'DEPLOY A REACT + NODE APP TO PRODUCTION ON AWS',
        'I Created a Responsive Portfolio Website Using Pure HTML, CSS and JavaScript',
        'I Rebuilt My GitHub ReadMe and Made it Dynamic. Here is how to build it.'
      ],
      recentlyQueried: [
        'React Hooks Componentdidmount',
        'Readme Template',
        'Button Animation CSS',
        'Rails Transaction',
        'Software Engineer Interview',
        'React Debounce',
        'Python Package Structure',
        'CSS Game',
        'Git Revert Pushed Commit',
        'Landing Page Template',
        'Flask MongoDB',
        'Relational Database',
        'NextJs Redux',
        'Learn Python for Free',
        'useReducer vs useState',
        'Install Zsh Ubuntu',
        'CTF for Beginners'
      ],
      story: {
        author: 'Name ABC',
        date: 'Jul 20',
        title: 'Getting into Vue',
        tags: ['vue', 'beginners', 'webdev', 'productivity'],
        reactions: 42,
        comments: 3,
        time: '2 min read'
      }
    }
  },
  methods: {
    selectTag (index) {
      this.selectedTag = index
    },
    toggleLeftSideBar () {
      this.isLeftSidebarOpen = !this.isLeftSidebarOpen
    },
    toggleRightSideBar () {
      this.isRightSidebarOpen = !this.isRightSidebarOpen
    },
    openLeftClass () {
      return (this.isLeftSidebarOpen) ? 'fixed block w-64 left-0 top-auto z-50 overflow-y-scroll' : 'hidden'
    },
    openRightClass () {
      return (this.isRightSidebarOpen) ? 'fixed block w-64 right-0 top-auto z-50 overflow-y-scroll' : 'hidden'
    }
  }
}
</script>
