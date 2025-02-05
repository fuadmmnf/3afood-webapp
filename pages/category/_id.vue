<template>
  <div class="shop-page-wrapper">
    <Breadcrumb :pageTitle="title" />
    <div class="container pt-100 pb-50">
      <div class="row service-item" v-for="(detail, index) in categories.details" :key="index">
        <div class="col-lg-5 col-md-8 col-10 mx-auto">
          <h4 class="service-title">{{ categories.category_name }}</h4>
          <p class="service-des">
            {{ detail.description }}
          </p>
          <div class="service-btn btn-hover">
            <n-link  to="/our-products" v-if="$store.getters.isAuthenticated" class="default-btn">See Product List</n-link>
          </div>
          <div class="service-btn btn-hover">
            <n-link to="/login" v-if="!$store.getters.isAuthenticated" class="default-btn">See Product List</n-link>
          </div>
        </div>
        <div class="col-lg-5 col-md-8 col-10 mx-auto">
          <div class="service-img">
            <img :src="path + detail?.image" :alt="categories?.category_name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Category Details",
      category_id: this.$route.params.id,
      categories: {},
      path: process.env.dev
        ? process.env.WEB_DEV_URL
        : process.env.WEB_BUILD_URL,
    };
  },
  methods: {
    async loadCategoryData() {
      try {
        const response = await this.$axios.$get(
          `categories/${this.category_id}`
        );
        this.categories = response.data;
        console.log("category data", this.categories);
      } catch (error) {
        console.error("Error loading category data:", error);
      }
    },
  },
  mounted() {
    this.loadCategoryData();
  },
};
</script>

<style scoped>
.service-item {
  margin-top: 30px;
  padding: 25px 20px;
}
.service-item .service-title {
  font-size: 30px;
  font-weight: bolder;
  padding: 20px 0;
}
.service-item .service-img {
  padding: 15px;
}

.service-item .service-img img {
  border-radius: 10px;
}

.service-btn a {
  font-size: 16px;
  color: $black;
  display: inline-block;
  border: 1px solid $dark;
  text-transform: uppercase;
  line-height: 1;
  padding: 19px 50px 19px;
  &:hover {
    color: $white;
    border: 1px solid $theme-color;
  }
}
</style>