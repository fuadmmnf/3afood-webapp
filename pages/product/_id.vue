<template>
  <div class="product-details-page-wrapper">
    <Breadcrumb :pageTitle="product.title" />
    <ProductDetailsWrapper :product="product" />
    <ProductDetailsDescriptionReview />

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
  mounted() {
      this.loadSingleProductData()
  },
  methods: {
      async loadSingleProductData() {
        this.product=await this.$axios.$get(`products/${this.id}`).then(res=>{
          return res
        })
      }
    },
};
</script>