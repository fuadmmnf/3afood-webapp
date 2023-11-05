<template>
    <div>
        <header class="header-area">
            <div class="header-top-area header-padding-2 d-none d-lg-block">
                <div :class="containerClass">
                    <div class="header-top-inner">
                        <div class="language-currency-wrap">
                            <div class="same-language-currency language-style">
                                <select name="language">
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="spanish">Spanish</option>
                                </select>
                            </div>
                            <div class="same-language-currency use-style">
                                <select name="currency">
                                    <option value="usd">USD</option>
                                    <option value="eur">EUR</option>
                                    <option value="rup">Rup</option>
                                </select>
                            </div>
                            <div class="same-language-currency">
                                <p>Call: <a href="callto:3965410">3965410</a></p>
                            </div>
                        </div>
                        <div class="header-offer">
                            <p>Free delivery on order over <span>$200</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-padding-1 sticky-bar header-res-padding clearfix" :class="{'is-sticky': isSticky}">
                <div :class="containerClass">
                    <div class="row">
                        <div class="col-lg-2 col-md-6 col-4">
                            <div class="logo">
                                <n-link to="/">
                                    <img src="/img/logo/logo.png" alt="flone logo">
                                </n-link>
                            </div>
                        </div>
                        <div class="col-lg-8 d-none d-lg-block">
                            <div class="main-menu">
                                <nav>
                                    <Navigation />
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-8">
                            <div class="header-right-wrap">
                              <div class="same-style account-setting d-none d-lg-block">
                                    <button class="account-setting-active" @click="isOpenAccountSettings=isOpenAccountSettings === ''?'Login':''">
                                       <span >Login</span>
                                    </button>
                                    <div class="account-dropdown" :class="{ active:isOpenAccountSettings==='Login' }">
                                        <ul>
                                            <li><n-link to="/login">Retail</n-link></li>
                                            <li><n-link to="/register">Wholesale</n-link></li>

                                        </ul>
                                    </div>
                                </div>
                              <div class="same-style account-setting d-none d-lg-block">
                                <button class="account-setting-active" @click="isOpenAccountSettings=isOpenAccountSettings === 'Register'?'':'Register'">
                                  <span >Register</span>
                                </button>
                                <div class="account-dropdown" :class="{ active:isOpenAccountSettings==='Register' }">
                                  <ul>
                                    <li><n-link to="/login">Retail</n-link></li>
                                    <li><n-link to="/register">Wholesale</n-link></li>
                                    <!--                                            <li><n-link to="/my-account">my account</n-link></li>-->
                                  </ul>
                                </div>
                              </div>
<!--                                <div class="same-style cart-wrap">-->
<!--                                    <button class="icon-cart" @click="openCart = !openCart">-->
<!--                                        <i class="pe-7s-shopbag"></i>-->
<!--                                        <span class="count-style">{{ cartItemCount }}</span>-->
<!--                                    </button>-->
<!--                                    <MiniCart :miniCart="{ visible:openCart }" @minicartClose="openCart = !openCart" />-->
<!--                                </div>-->
<!--                                <div class="same-style mobile-menu-toggler d-block d-lg-none">-->
<!--                                    <button class="mobile-aside-button" @click="navOpen = !navOpen">-->
<!--                                        <i class="pe-7s-menu"></i>-->
<!--                                    </button>-->
<!--                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @toggleAsideMenu="navOpen = !navOpen" v-if="navOpen" />
    </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';

const {containerClass} =defineProps(['containerClass']);

const cartItemCount = computed(() => $store.getters.cartItemCount);
const wishlistItemCount = computed(() => $store.getters.wishlistItemCount);
const compareItemCount = computed(() => $store.getters.compareItemCount);

const isSticky = ref(false);
const isOpenSearch = ref(false);
const isOpenAccountSettings = ref("");
const openCart = ref(false);
const navOpen = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    isSticky.value = scroll >= 200;
  });
});
</script>



<style >


</style>