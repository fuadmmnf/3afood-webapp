<template>
  <div class="shop-no-sidebar-wrapper">
    <Breadcrumb pageTitle="Our Products" />

    <!-- product items wrapper -->
    <div class="shop-area pt-100 pb-100">
      <div class="container">
        <div class="row flex-row-reverse">
          <div class="col-lg-12" v-if="$store.getters.isAuthenticated">
            <!-- shop product -->
            <div class="shop-bottom-area mt-35">
              <div class="row product-layout" :class="{ 'list': layout === 'list', 'grid three-column': layout === 'threeColumn', 'grid two-column': layout === 'twoColumn' }">
                <div class="col-xl-4 col-sm-6" v-for="(product, index) in getItems" :key="index" >
                  <ProductGridItem :product="product" :layout="layout"  />
                </div>
              </div>
            </div>
            <!-- end shop product -->

            <div v-if="getPaginateCount > 1">
              <pagination class="pro-pagination-style shop-pagination mt-30" v-model="currentPage" :per-page="perPage" :records="products.length" @paginate="paginateClickCallback" :page-count="getPaginateCount" />
            </div>
          </div  >
          <div class="col-12" v-else>
            <div class="empty-cart text-center">
              <h4>Sorry, you need to log in to view our products.</h4>
              <n-link to="/login" class="empty-cart__button">Login</n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end product items wrapper -->
  </div>
</template>

<script>
export default {
  components: {
    Breadcrumb: () => import('@/components/Breadcrumb'),
    ProductGridItem: () => import('@/components/product/ProductGridItem'),
    QuickView: () => import('@/components/QuickView'),
  },

  data() {
    return {
      layout: "threeColumn",
      currentPage: 1,
      perPage: 9,
      products:[],

    }
  },

  computed: {
    userType(){
      return this.$store.getters.getUserType
    },
    getItems() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.products.slice(start, end);
    },
    getPaginateCount() {
      return Math.ceil(this.products.length / this.perPage);
    },
  },

  methods: {
    paginateClickCallback(page) {
      this.currentPage = Number(page);
    },
    async loadProductData() {
      try {
        const response = await this.$axios.$get(`products/type/${this.userType}`);
        this.products =response.data
        console.log("Product:", response.data)
      } catch (error) {
        console.error("Error loading product data:", error);
      }
    },
  },
  mounted  ()  {
    if(this.$store.getters.isAuthenticated){
      this.loadProductData()
    }


  },
  head() {
    return {
      title: "Our Products"
    }
  }
};
</script>
