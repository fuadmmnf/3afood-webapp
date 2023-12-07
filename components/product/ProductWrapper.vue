<template>
  <div class="product-area pb-90">
    <div class="container">
      <SectionTitleWithSubTitle
        title="DAILY DEALS!"
        classes="section-title"
        v-if="!!isSectionTitle"
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
    userType(){
      return this.$store.getters.getUserType
    }


  },
  data() {
    return {
      products:[],
      layout: "twoColumn",
    };
  },
  methods:{
    async loadProductData() {
      try {
        const response = await this.$axios.$get(`products/type/${this.userType}?limit=5`);
        this.products =response.data
        console.log("Product:", response.data)
      } catch (error) {
        console.error("Error loading product data:", error);
      }
    },
  },
  mounted  ()  {
     this.loadProductData()

  },
};

</script>