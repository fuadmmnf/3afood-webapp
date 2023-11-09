<template>
  <div class="product-details-page-wrapper">
    <Breadcrumb :pageTitle="product.name" />
    <ProductDetailsWrapper :product="product" />
    <ProductDetailsDescriptionReview />

  </div>
</template>

<script>
export default {
    data() {
        return {
          slug: this.$route.params.slug,
          product:{}
        }
    },
    head() {
        return {
            title: this.product.name
        }
    },
  mounted() {
      this.loadSSingleProductData()
  },
  methods: {
      async loadSSingleProductData() {
        this.product=await this.$axios.$get(`products?slug=${this.slug}`).then(res=>{
          return res[0]
        })
      }
      ,
        slugify(text) {
            return text
                .toString()
                .replace(/\s+/g, "-") // Replace spaces with -
                .replace(/[^\w-]+/g, "") // Remove all non-word chars
                .replace(/--+/g, "-") // Replace multiple - with single -
                .replace(/^-+/, "") // Trim - from start of text
                .replace(/-+$/, ""); // Trim - from end of text
        }
    },
};
</script>