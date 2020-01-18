export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Ross Head / Artist / Painter / London',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/lazysizes.client.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-responsive-loader', 'nuxt-webfontloader'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    }
  },
  responsiveLoader: {
    adapter: require('responsive-loader/sharp'),
    name: 'images/[name]-[width].[ext]', // use [name] to keep the original filename
    sizes: [320, 640, 768, 960, 1024, 1280, 1600, 1920], // array of image sizes - adjust to your layout needs
    quality: 85 // 85 is default. Tweak this if you need to
  },
  webfontloader: {
    custom: {
      families: ['Lato:n4,n9'],
      urls: [
        // for each Google Fonts add url + options you want
        // here add font-display option
        'https://fonts.googleapis.com/css?family=Lato:400,900&display=swap'
      ]
    }
  }
}
