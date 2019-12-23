const webpack = require('webpack')
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global CSS
  */
  css: [
    // 'bootstrap/dist/css/bootstrap.css',
    // { src: '@/style/meanmenu.min.css', lang: 'css' },
    // { src: '@/style/slick.css', lang: 'css' },
    // { src: '@/style/font-awesome.min.css', lang: 'css' },
    // { src: '@/style/style.css', lang: 'css' },
    // { src: '@/style/responsive.css', lang: 'css' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~plugins/bootstrap.js', ssr: false },
    // { src: '~plugins/wow.js', ssr: false },
    // { src: '~plugins/js/wow.js', ssr: false },
    // { src: '~plugins/slick.js', ssr: false },
    // { src: '~/plugins/js/owl.carousel.min.js', ssr: false },
    // { src: '~plugins/js/jquery.meanmenu.js', ssr: false },
    // // { src: '~plugins/waypoints.js', ssr: false },
    // // { src: '~plugins/js/plugins.js', ssr: false },
    // { src: '~plugins/js/main.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [],
    plugins: [
    ],

    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      // if (ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}
