import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4ef6072c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3aecf298 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _1a66bc53 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _1309740e = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _9a9ee6fc = () => interopDefault(import('../pages/compare.vue' /* webpackChunkName: "pages/compare" */))
const _64974386 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _10d01eee = () => interopDefault(import('../pages/home-cosmetics.vue' /* webpackChunkName: "pages/home-cosmetics" */))
const _6b7d9532 = () => interopDefault(import('../pages/home-fashion-five.vue' /* webpackChunkName: "pages/home-fashion-five" */))
const _b0355cb4 = () => interopDefault(import('../pages/home-fashion-four.vue' /* webpackChunkName: "pages/home-fashion-four" */))
const _20e1a786 = () => interopDefault(import('../pages/home-fashion-seven.vue' /* webpackChunkName: "pages/home-fashion-seven" */))
const _260946dc = () => interopDefault(import('../pages/home-fashion-six.vue' /* webpackChunkName: "pages/home-fashion-six" */))
const _31413d64 = () => interopDefault(import('../pages/home-fashion-three.vue' /* webpackChunkName: "pages/home-fashion-three" */))
const _39469cfc = () => interopDefault(import('../pages/home-fashion-two.vue' /* webpackChunkName: "pages/home-fashion-two" */))
const _c64c0f0c = () => interopDefault(import('../pages/login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _9adc4c02 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _5fb78b0a = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _056e4129 = () => interopDefault(import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */))
const _5c54544b = () => interopDefault(import('../pages/shop-grid-full-width.vue' /* webpackChunkName: "pages/shop-grid-full-width" */))
const _18ab9e93 = () => interopDefault(import('../pages/shop-grid-no-sidebar.vue' /* webpackChunkName: "pages/shop-grid-no-sidebar" */))
const _07fa8d38 = () => interopDefault(import('../pages/shop-grid-right-sidebar.vue' /* webpackChunkName: "pages/shop-grid-right-sidebar" */))
const _ca1a548c = () => interopDefault(import('../pages/shop-grid-two-column.vue' /* webpackChunkName: "pages/shop-grid-two-column" */))
const _9170581a = () => interopDefault(import('../pages/shop-list-full-width.vue' /* webpackChunkName: "pages/shop-list-full-width" */))
const _51850be8 = () => interopDefault(import('../pages/shop-list-standard.vue' /* webpackChunkName: "pages/shop-list-standard" */))
const _64cd2071 = () => interopDefault(import('../pages/terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _e4a55210 = () => interopDefault(import('../pages/wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _382aa22c = () => interopDefault(import('../pages/blog/blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _1c68c454 = () => interopDefault(import('../pages/blog/blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _0412fc2c = () => interopDefault(import('../pages/product/product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _0f8651a2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _39365150 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _ee0dd872 = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4ef6072c,
    name: "about"
  }, {
    path: "/blog",
    component: _3aecf298,
    name: "blog"
  }, {
    path: "/cart",
    component: _1a66bc53,
    name: "cart"
  }, {
    path: "/checkout",
    component: _1309740e,
    name: "checkout"
  }, {
    path: "/compare",
    component: _9a9ee6fc,
    name: "compare"
  }, {
    path: "/contact",
    component: _64974386,
    name: "contact"
  }, {
    path: "/home-cosmetics",
    component: _10d01eee,
    name: "home-cosmetics"
  }, {
    path: "/home-fashion-five",
    component: _6b7d9532,
    name: "home-fashion-five"
  }, {
    path: "/home-fashion-four",
    component: _b0355cb4,
    name: "home-fashion-four"
  }, {
    path: "/home-fashion-seven",
    component: _20e1a786,
    name: "home-fashion-seven"
  }, {
    path: "/home-fashion-six",
    component: _260946dc,
    name: "home-fashion-six"
  }, {
    path: "/home-fashion-three",
    component: _31413d64,
    name: "home-fashion-three"
  }, {
    path: "/home-fashion-two",
    component: _39469cfc,
    name: "home-fashion-two"
  }, {
    path: "/login-register",
    component: _c64c0f0c,
    name: "login-register"
  }, {
    path: "/my-account",
    component: _9adc4c02,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _5fb78b0a,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _056e4129,
    name: "shop"
  }, {
    path: "/shop-grid-full-width",
    component: _5c54544b,
    name: "shop-grid-full-width"
  }, {
    path: "/shop-grid-no-sidebar",
    component: _18ab9e93,
    name: "shop-grid-no-sidebar"
  }, {
    path: "/shop-grid-right-sidebar",
    component: _07fa8d38,
    name: "shop-grid-right-sidebar"
  }, {
    path: "/shop-grid-two-column",
    component: _ca1a548c,
    name: "shop-grid-two-column"
  }, {
    path: "/shop-list-full-width",
    component: _9170581a,
    name: "shop-list-full-width"
  }, {
    path: "/shop-list-standard",
    component: _51850be8,
    name: "shop-list-standard"
  }, {
    path: "/terms-conditions",
    component: _64cd2071,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _e4a55210,
    name: "wishlist"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _382aa22c,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _1c68c454,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _0412fc2c,
    name: "product-product-affiliate"
  }, {
    path: "/",
    component: _0f8651a2,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _39365150,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _ee0dd872,
    name: "product-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
