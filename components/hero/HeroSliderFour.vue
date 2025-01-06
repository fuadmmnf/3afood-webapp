<template>
  <div class="slider-area nav-style-1">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(slider, index) in sliderData"
        :key="index"
        class="slider-height-4 d-flex align-items-center bg-img"
        :style="{ backgroundImage: `url(${slider.backgroundImage})` }"
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="slider-content-4 slider-animation-1 text-center">
                <h3>{{ slider.subTitle }}</h3>
                <h1>{{ slider.title }}</h1>
                <p>{{ slider.desc }}</p>
                <div class="slider-btn btn-hover">
                  <n-link :to="slider.link">{{ slider.btn_label }}</n-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- Swiper Navigation Start -->
      <div class="hero-slider-nav swiper-button-prev">
        <i class="pe-7s-angle-left"></i>
      </div>
      <div class="hero-slider-nav swiper-button-next">
        <i class="pe-7s-angle-right"></i>
      </div>
      <!-- Swiper Navigation End -->
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 750,
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
          delay: 6000,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      sliderData: [
        // {
        //   subTitle: "Food Services",
        //   title: "300+ Wholesale Product",
        //   desc: "Lets see our products",
        //   link: "/our-products",
        //   btn_label: "View Products",
        //   backgroundImage: "/img/slider/3aFood/shutterstock_708645067.jpg",
        // },
        // {
        //   subTitle: "Food Services",
        //   title: "50+ Retail Product",
        //   desc: "Lets see our products",
        //   link:"/our-products",
        //   btn_label:"View Products",
        //   backgroundImage: "/img/slider/3aFood/SPICES.jpg"
        // },
        // {
        //   subTitle: "Food Services",
        //   title: "Best In The Town",
        //   desc: "Lets see our products",
        //   link: "/our-products",
        //   btn_label: "View Products",
        //   backgroundImage: "/img/slider/3aFood/SEAFOODS.jpg",
        // },
        // {
        //   subTitle: "Ship Supply Order",
        //   title: "Best In The Town",
        //   desc: "Lets see our products",
        //   link: "/online-order",
        //   btn_label: "See Product List",
        //   backgroundImage: "/img/slider/3aFood/SHIP_SUPPLY.jpg",
        // },
      ],
       path : process.env.dev? process.env.WEB_DEV_URL: process.env.WEB_BUILD_URL
    };
  },
  methods: {
    async loadSliderData() {
      try {
        const response = await this.$axios.$get("ui-sections/slider");
        this.sliderData = response.map(item => {
          const attributes = item.attributes.reduce((acc, attr) => {
            acc[attr.key] = attr.value;
            return acc;
          }, {});
          return {
            subTitle: attributes.tag || "",
            title: attributes.title || "",
            desc: attributes.caption || "",
            link: attributes.btn_link || "#",
            btn_label: attributes.btn_label || "Learn More",
            backgroundImage: this.path+attributes.image || "",
          };
        });
      } catch (error) {
        console.error("Error loading slider data:", error);
      }
    },
  },
  mounted() {
    this.loadSliderData()
  },
};
</script>