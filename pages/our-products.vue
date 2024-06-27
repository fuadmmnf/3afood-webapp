<template>
  <div class="shop-no-sidebar-wrapper">
    <Breadcrumb pageTitle="Our Products" />

    <!-- product items wrapper -->
    <div class="shop-area pt-100 pb-100">
      <div class="container">
        <div class="row flex-row-reverse">
          <div class="col-lg-12" v-if="$store.getters.isAuthenticated">
            <!-- Filters -->
            <div class="row my-5">
              <div class="pro-sidebar-search col-md-6 mx-auto my-1">
                <form class="pro-sidebar-search-form">
                  <input type="text" v-model.trim="searchQuery.query" placeholder="Search here...">
                  <button @click.prevent="loadProductData">
                    <i class="pe-7s-search" ></i>
                  </button>
                </form>
              </div>
              <div class="shop-select col-md-4 mx-auto my-1">
                <select v-model="searchQuery.category" @change.prevent="loadProductData" class="custom-select-box">
                  <option value=""> All Category</option>
                  <option :value="category.id" v-for="category in categories" :key="category.id">{{category.category_name}}</option>
                </select>
              </div>
            </div>

            <!-- end Filters -->

            <!-- shop product -->
            <div class="shop-bottom-area mt-35">
              <div v-if="products.length > 0">
                <div class="row product-layout" :class="{ 'list': layout === 'list', 'grid three-column': layout === 'threeColumn', 'grid two-column': layout === 'twoColumn' }">
                  <div class="col-xl-4 col-sm-6" v-for="(product, index) in products" :key="index">
                    <ProductGridItem :product="product" :layout="layout" />
                  </div>
                </div>
              </div>
              <div v-else>
                <h5 class="text-danger text-center">No products found</h5>
              </div>
            </div>
            <!-- end shop product -->

            <div v-if="getPaginateCount > 1">
              <pagination class="pro-pagination-style shop-pagination mt-30" v-model="currentPage" :per-page="perPage" :records="filteredItems.length" @paginate="paginateClickCallback" :page-count="getPaginateCount" />
            </div>
          </div>
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
      products: [],
      categories:[],
      searchQuery: {
        query:"",
        category:''
      },
    };
  },

  computed: {
    userType() {
      return this.$store.getters.getUserType;
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
        let queryParams = [];
        if (this.searchQuery.query) {
          queryParams.push(`query=${encodeURIComponent(this.searchQuery.query)}`);
        }
        if (this.searchQuery.category) {
          queryParams.push(`category_id=${encodeURIComponent(this.searchQuery.category)}`);
        }
        const url = `products/type/${this.userType}` + (queryParams.length ? `?${queryParams.join('&')}` : '');
        const response = await this.$axios.$get(url);
        this.products = response.data;
      } catch (error) {
        console.error("Error loading product data:", error);
      }
    },
    async loadCategoriesData() {
      try {
        const response = await this.$axios.$get(`categories`);
        this.categories = response.data;
      } catch (error) {
        console.error("Error loading category data:", error);
      }
    },
  },
  mounted() {
    if (this.$store.getters.isAuthenticated) {
      this.loadProductData();
      this.loadCategoriesData()
    }
  },
  head() {
    return {
      title: "Our Products"
    }
  }
};
</script>

<style scoped>
.custom-select-box {
  border: 1px solid #ccc;
  text-align: center;
  padding: 5px;
  border-radius: 4px;
}
</style>
