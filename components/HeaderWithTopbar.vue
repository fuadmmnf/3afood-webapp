<template>
  <div>
    <header class="header-area">
      <div class="header-top-area header-padding-2 d-none d-lg-block">
        <div :class="containerClass">
          <div class="header-top-inner">
            <div class="language-currency-wrap">
              <div class="same-language-currency language-style">
                <i class="pe-7s-phone"></i><a href="tel:0894562685">08 9456 2685</a>
              </div>
              <div class="same-language-currency language-style">
                <i class="pe-7s-mail"></i><a href="mailto:info@3afoods.com.au">info@3afoods.com.au</a>
              </div>
              <div class="same-language-currency language-style"></div>
            </div>
            <div class="header-offer">
              <i class="pe-7s-map-marker"></i>
              <span>3/39 Tulloch Way Canning Vale WA 6155 </span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="header-padding-1 sticky-bar header-res-padding clearfix"
        :class="{ 'is-sticky': isSticky }"
      >
        <div :class="containerClass">
          <div class="row">
            <div class="col-lg-2 col-md-6 col-4">
              <div class="logo">
                <n-link  to="/"> <img
                    src="/img/logo/3A-foods-logo@0-5x.png"
                    alt="3a Foods logo"
                /> </n-link>


              </div>
            </div>
            <div class="col-lg-8 d-none d-lg-block">
              <div class="main-menu">
                <nav>
                  <Navigation />
                </nav>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-8 d-flex justify-content-end justify-content-lg-center ">
              <div class="header-right-wrap align-items-center ">
                <div v-if="!$store.getters.isAuthenticated" class="same-style account-setting d-lg-block">
                  <button
                      class="account-setting-active"
                  >
                    <n-link to="/login">Login</n-link>
                  </button>

                </div>
                <div v-if="!$store.getters.isAuthenticated" class="same-style account-setting  active-btn d-lg-block">
                  <button
                      class="account-setting-active active-btn"
                      @click="
                      isOpenAccountSettings =
                        isOpenAccountSettings === 'Register' ? '' : 'Register'
                    "
                  >
                    <span class="active-btn">Register</span>
                  </button>
                  <div
                      class="account-dropdown"
                      :class="{ active: isOpenAccountSettings === 'Register' }"
                  >
                    <ul>
<!--                      <li><n-link to="/register/retail">Retail</n-link></li>-->
                      <li>
                        <n-link to="/register/wholesale">Wholesale</n-link>
                        <n-link to="/register/ship_supply">Ship Supply</n-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div  v-if="$store.getters.isAuthenticated" class="same-style account-setting d-lg-block active-btn">
                  <button
                    class="account-setting-active active-btn"
                    @click="
                      isOpenAccountSettings =
                        isOpenAccountSettings === 'Profile' ? '' : 'Profile'
                    "
                  >
                    <span><i class="pe-7s-user mr-10 active-btn"></i></span>
                    <span class="active-btn">{{ $store.getters.getUsername }}</span>
                  </button>
                  <div
                    class="account-dropdown"
                    :class="{ active: isOpenAccountSettings === 'Profile' }"
                  >
                    <ul>
                      <li><n-link to="/my-account">My Profile</n-link></li>
                      <li v-if="!$store.getters.isShipSupply"><n-link to="/order-history">My Orders</n-link></li>
                      <li><a href="" @click.prevent="logout">Logout</a></li>
                    </ul>
                  </div>
                </div>
                <div  v-if="$store.getters.isAuthenticated && !$store.getters.isShipSupply " class="same-style cart-wrap">
                  <button class="icon-cart" @click="openCart = !openCart">
                    <i class="pe-7s-shopbag"></i>
                    <span class="count-style">{{ cartItemCount }}</span>
                  </button>
                  <MiniCart
                    :miniCart="{ visible: openCart }"
                    @minicartClose="openCart = !openCart"
                  />
                </div>
                <div class="same-style nav-btn mobile-menu-toggler d-block d-lg-none ">
                  <button
                    class="mobile-aside-button nav-btn"
                    @click="navOpen = !navOpen"
                  >
                    <i class="pe-7s-menu nav-btn"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <OffCanvasMobileMenu
      :class="{ 'show-mobile-menu': navOpen }"
      @toggleAsideMenu="navOpen = !navOpen"
      v-if="navOpen"
    />
  </div>
</template>

<script>
export default {
  props: ["containerClass"],
  data() {
    return {
      wishlistItemCount: 0,
      compareItemCount: 0,
      user: null,
      isSticky: false,
      isOpenSearch: false,
      isOpenAccountSettings: '',
      openCart: false,
      navOpen: false,
    };
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    }
  },
  methods: {
    onScroll() {
      let scroll = window.scrollY;
      this.isSticky = scroll >= 200;
    },
    handleClick(e){
      const classname = e.target.className;
        if(this.isOpenAccountSettings && !classname.includes("active-btn")){
          this.isOpenAccountSettings =false;
      }
      if(this.navOpen && !classname.includes("nav-btn")){
        this.navOpen =false;
      }
    },

    async logout() {
      try{
        const response=await this.$axios.post('/logout');
        await this.$store.dispatch("logout");
        this.$router.push('/login')
      }catch (error){
        console.log(error)
      }
    },
  },
  created () {
    window.addEventListener('click', this.handleClick);
  },
  destroyed () {
    window.removeEventListener('click', this.handleClick);
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped></style>