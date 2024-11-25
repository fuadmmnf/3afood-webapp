<template>
  <div class="product-wrap mb-30">
    <div class="product-img">
      <n-link :to="`/product/${product.id}`">
        <img class="default-img" v-if="product.img" :src="path+product.img" :alt="product.title" />
        <img class="default-img" v-else :src="getCategoryImage(product.category.category_name)" :alt="product.title" />
      </n-link>
      <div
        class="product-action"
      >
        <div class="pro-same-action pro-cart">
          <button class="btn" title="Add To Cart" @click="addToCart(product)">
            <i class="pe-7s-cart"></i>
            Add To Cart
          </button>
        </div>

      </div>
    </div>
    <div class="product-content text-center">
      <h3>
        <n-link :to="`/product/${product.id}`">{{
          product.title
        }}</n-link>
      </h3>
      <div class="product-price" v-if="userType==='retail'">
        <span>${{ product.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import categoryData from "@/data/category.json";
export default {
  props: ["product", "layout"],
  data(){
    return{
      path:''
    }
  },
  methods: {
    addToCart(product) {
      const prod = { ...product, cartQuantity: 1 };
      // for notification
      if (this.$store.state.cart.find((el) => product.id === el.id)) {
        this.$notify({ title: "Already added to cart update with one" });
      } else {
        this.$notify({ title: "Add to cart successfully!" });
      }
      this.$store.dispatch("addToCartItem", prod);
    },

    addToWishlist(product) {
      // for notification
      if (this.$store.state.wishlist.find((el) => product.id === el.id)) {
        this.$notify({ title: "Already added to wishlist!" });
      } else {
        this.$notify({ title: "Add to wishlist successfully!" });
      }

      this.$store.dispatch("addToWishlist", product);
    },

    addToCompare(product) {
      // for notification
      if (this.$store.state.compare.find((el) => product.id === el.id)) {
        this.$notify({ title: "Already added to compare!" });
      } else {
        this.$notify({ title: "Add to compare successfully!" });
      }

      this.$store.dispatch("addToCompare", product);
    },

    getCategoryImage(category_name){
      return categoryData.find((category)=>category.title===category_name)?.imgSrc
    }

  },
  computed:{
    userType(){
      return this.$store.getters.getUserType
    }
  },
  mounted() {
    this.path = process.env.dev? process.env.WEB_DEV_URL: process.env.WEB_BUILD_URL
  },
};
</script>