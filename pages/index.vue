<template>
  <div
    class="bg-red-600 min-h-screen font-sans absolute w-full overflow-hidden"
  >
    <div>
      <div class="fixed text-gray-200 top-0 z-30 pl-2">
        <h1
          class="font-black uppercase tracking-wider leading-none"
          style="font-size:15vw;"
        >
          Ross Head
        </h1>
        <h2 class="text-6xl md:text-xxl leading-none">
          <span class="block md:inline">Artist&nbsp;/ </span
          ><span class="block md:inline">Painter&nbsp;/ </span
          ><span class="block md:inline">London</span>
        </h2>
      </div>
      <div class="z-20">
        <img
          :data-src="'~/assets/images/neckkisses.jpg'"
          :data-srcset="require('~/assets/images/neckkisses.jpg').srcSet"
          class="lazyload fixed -mr-5 sm:mr-48 right-0 top-0 sm:top-auto mt-12 sm:mt-0 sm:bottom-0 mb-10 w-auto"
          style="max-height: 66vh;"
        />
      </div>
      <div
        class="fixed bottom-0 flex flex-col left-0 p-2 z-40 text-lg sm:text-xl md:text-2xl"
      >
        <div>
          <a
            href="https://instagram.com/rossmhead/"
            target="_blank"
            rel="noreferer noopener"
            class="inline-block w-auto mb-2 -ml-2 px-3 py-1 bg-black text-gray-300 uppercase tracking-wider hover:bg-white hover:text-red-700"
          >
            Instagram
          </a>
        </div>
        <div class="pl-3">
          <a
            href="mailto:ross@rosshead.com"
            target="_blank"
            rel="noreferer noopener"
            class="hover:text-white"
          >
            ross@rosshead.com
          </a>
        </div>
        <div class="pl-3 text-md sm:text-xl">
          <span class="block md:inline">Studio C/1, Bow Arts, 183 Bow Rd, </span
          ><span class="block md:inline">London, E3 2SJ</span>
        </div>
      </div>
    </div>
  </div>
</template>
