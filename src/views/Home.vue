<template>
  <div class="w-full bg-gray-200">
    <header class="h-16 w-full bg-gray-100 border-b border-gray-400">
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
    <div class="flex h-full w-8/12 py-2 mx-auto bg-gray-200">
      <aside class="h-full w-1/5">
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
      </aside>
      <main class="h-full w-3/5"></main>
      <aside class="h-full w-64">
        <section class="w-full mb-4 bg-gray-100 border border-gray-400 rounded-sm">
          <header class="w-full px-3 py-3 border-b">
            <h3 class="text-base font-bold">Join DEV</h3>
          </header>
          <div class="grid gap-2 w-full px-3 py-4">
            <a class="flex justify-center items-center w-full h-12 py-2 px-4 bg-gray-900 hover:bg-black rounded-sm text-gray-100 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 mr-2 icon icon-tabler icon-tabler-brand-github" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
              </svg>
              Sign In with GitHub
            </a>
            <a class="flex justify-center items-center w-full h-12 py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-sm text-gray-100 cursor-pointer">
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
        <section class="w-full mb-4 border-b border-gray-400">
          <header class="w-full px-3 py-3 border-b">
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
        <section class="w-full mb-4 border-b border-gray-400">
          <header class="w-full px-3 py-3 border-b">
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
      </aside>
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
