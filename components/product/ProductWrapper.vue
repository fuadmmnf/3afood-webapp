<template>
  <div class="product-area pb-90">
    <div class="container">
      <SectionTitleWithSubTitle
        title="DAILY DEALS!"
        classes="section-title"
        v-if="isSectionTitle ? true : false"
      />
      <div class="row ptb-50">
        <div
            class="col-xl-3 col-lg-4 col-sm-6"
            v-for="(product, index) in products"
            :key="index"
        >
          <ProductGridItem :product="product" :layout="layout" />
        </div>
      </div>

      <div class="view-more text-center mt-20 toggle-btn2">
        <n-link to="/shop" class="loadMore2">VIEW MORE PRODUCTS</n-link>
      </div>

    </div>
    <QuickView />
  </div>
</template>

<script>
export default {
  props: ["isSectionTitle"],

  components: {
    ProductGridItem: () => import("@/components/product/ProductGridItem"),
    QuickView: () => import("@/components/QuickView"),
  },

  computed: {
    newProducts() {
      return this.$store.getters.getNewProducts;
    },
    bestProducts() {
      return this.$store.getters.getBestProducts;
    },
    saleProducts() {
      return this.$store.getters.getSaleProducts;
    },

  },
  data() {
    return {
      products:[],
      layout: "twoColumn",
    };
  },
  methods:{
    async loadProductData() {
      this.products = await this.$axios.$get("products?_limit=10")
    }
  },
  mounted  ()  {
     this.loadProductData()
  },
};

</script>