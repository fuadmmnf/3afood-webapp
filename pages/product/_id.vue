<template>
  <div class="product-details-page-wrapper">
    <Breadcrumb :pageTitle="product.title" />
    <ProductDetailsWrapper :product="product" />
<!--    <ProductDetailsDescriptionReview />-->

  </div>
</template>

<script>
export default {
    data() {
        return {
          id: this.$route.params.id,
          product:{}
        }
    },
    head() {
        return {
            title: this.product.title
        }
    },
  methods: {
    async loadSingleProductData() {
      try {
        const response = await this.$axios.$get(`products/${this.id}`);
        this.product = response.data
        console.log("Product:", response.data)
      } catch (error) {
        console.error("Error loading product data:", error);
      }
    },
  },
  mounted() {
    this.loadSingleProductData()
  },
};
</script>