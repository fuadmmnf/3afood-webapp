import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _53212fa0 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _498c447a = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _bb076b46 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _3da6bf03 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _11e66b90 = () => interopDefault(import('..\\pages\\compare.vue' /* webpackChunkName: "pages/compare" */))
const _12109bf3 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _54fa0bda = () => interopDefault(import('..\\pages\\home-cosmetics.vue' /* webpackChunkName: "pages/home-cosmetics" */))
const _4608a768 = () => interopDefault(import('..\\pages\\home-fashion-five.vue' /* webpackChunkName: "pages/home-fashion-five" */))
const _fb1f3848 = () => interopDefault(import('..\\pages\\home-fashion-four.vue' /* webpackChunkName: "pages/home-fashion-four" */))
const _666660c7 = () => interopDefault(import('..\\pages\\home-fashion-seven.vue' /* webpackChunkName: "pages/home-fashion-seven" */))
const _076ba8c8 = () => interopDefault(import('..\\pages\\home-fashion-six.vue' /* webpackChunkName: "pages/home-fashion-six" */))
const _5e3695d8 = () => interopDefault(import('..\\pages\\home-fashion-three.vue' /* webpackChunkName: "pages/home-fashion-three" */))
const _48956c06 = () => interopDefault(import('..\\pages\\home-fashion-two.vue' /* webpackChunkName: "pages/home-fashion-two" */))
const _7ac50204 = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _46798eee = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _3da29494 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _06c48a3b = () => interopDefault(import('..\\pages\\Services.vue' /* webpackChunkName: "pages/Services" */))
const _e4f8619a = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _7a308e55 = () => interopDefault(import('..\\pages\\shop-grid-full-width.vue' /* webpackChunkName: "pages/shop-grid-full-width" */))
const _3687d89d = () => interopDefault(import('..\\pages\\shop-grid-no-sidebar.vue' /* webpackChunkName: "pages/shop-grid-no-sidebar" */))
const _31fec224 = () => interopDefault(import('..\\pages\\shop-grid-right-sidebar.vue' /* webpackChunkName: "pages/shop-grid-right-sidebar" */))
const _8e61e078 = () => interopDefault(import('..\\pages\\shop-grid-two-column.vue' /* webpackChunkName: "pages/shop-grid-two-column" */))
const _55b7e406 = () => interopDefault(import('..\\pages\\shop-list-full-width.vue' /* webpackChunkName: "pages/shop-list-full-width" */))
const _6f477f1c = () => interopDefault(import('..\\pages\\shop-list-standard.vue' /* webpackChunkName: "pages/shop-list-standard" */))
const _741bef7b = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _564e5ffc = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _b116fcc2 = () => interopDefault(import('..\\pages\\blog\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog/blog-right-sidebar" */))
const _0ba8d16a = () => interopDefault(import('..\\pages\\blog\\blog-without-sidebar.vue' /* webpackChunkName: "pages/blog/blog-without-sidebar" */))
const _d93832c6 = () => interopDefault(import('..\\pages\\product\\product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _72d90a65 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4cf9870a = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _3f6de74d = () => interopDefault(import('..\\pages\\login\\_type.vue' /* webpackChunkName: "pages/login/_type" */))
const _f94b7930 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _6de2f269 = () => interopDefault(import('..\\pages\\register\\_type.vue' /* webpackChunkName: "pages/register/_type" */))

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
    component: _53212fa0,
    name: "about"
  }, {
    path: "/blog",
    component: _498c447a,
    name: "blog"
  }, {
    path: "/cart",
    component: _bb076b46,
    name: "cart"
  }, {
    path: "/checkout",
    component: _3da6bf03,
    name: "checkout"
  }, {
    path: "/compare",
    component: _11e66b90,
    name: "compare"
  }, {
    path: "/contact",
    component: _12109bf3,
    name: "contact"
  }, {
    path: "/home-cosmetics",
    component: _54fa0bda,
    name: "home-cosmetics"
  }, {
    path: "/home-fashion-five",
    component: _4608a768,
    name: "home-fashion-five"
  }, {
    path: "/home-fashion-four",
    component: _fb1f3848,
    name: "home-fashion-four"
  }, {
    path: "/home-fashion-seven",
    component: _666660c7,
    name: "home-fashion-seven"
  }, {
    path: "/home-fashion-six",
    component: _076ba8c8,
    name: "home-fashion-six"
  }, {
    path: "/home-fashion-three",
    component: _5e3695d8,
    name: "home-fashion-three"
  }, {
    path: "/home-fashion-two",
    component: _48956c06,
    name: "home-fashion-two"
  }, {
    path: "/login-register",
    component: _7ac50204,
    name: "login-register"
  }, {
    path: "/my-account",
    component: _46798eee,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _3da29494,
    name: "privacy-policy"
  }, {
    path: "/Services",
    component: _06c48a3b,
    name: "Services"
  }, {
    path: "/shop",
    component: _e4f8619a,
    name: "shop"
  }, {
    path: "/shop-grid-full-width",
    component: _7a308e55,
    name: "shop-grid-full-width"
  }, {
    path: "/shop-grid-no-sidebar",
    component: _3687d89d,
    name: "shop-grid-no-sidebar"
  }, {
    path: "/shop-grid-right-sidebar",
    component: _31fec224,
    name: "shop-grid-right-sidebar"
  }, {
    path: "/shop-grid-two-column",
    component: _8e61e078,
    name: "shop-grid-two-column"
  }, {
    path: "/shop-list-full-width",
    component: _55b7e406,
    name: "shop-list-full-width"
  }, {
    path: "/shop-list-standard",
    component: _6f477f1c,
    name: "shop-list-standard"
  }, {
    path: "/terms-conditions",
    component: _741bef7b,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _564e5ffc,
    name: "wishlist"
  }, {
    path: "/blog/blog-right-sidebar",
    component: _b116fcc2,
    name: "blog-blog-right-sidebar"
  }, {
    path: "/blog/blog-without-sidebar",
    component: _0ba8d16a,
    name: "blog-blog-without-sidebar"
  }, {
    path: "/product/product-affiliate",
    component: _d93832c6,
    name: "product-product-affiliate"
  }, {
    path: "/",
    component: _72d90a65,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _4cf9870a,
    name: "blog-slug"
  }, {
    path: "/login/:type?",
    component: _3f6de74d,
    name: "login-type"
  }, {
    path: "/product/:id?",
    component: _f94b7930,
    name: "product-id"
  }, {
    path: "/register/:type?",
    component: _6de2f269,
    name: "register-type"
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
