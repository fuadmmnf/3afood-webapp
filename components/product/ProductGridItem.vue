<template>
  <div class="product-wrap mb-30">
    <div class="product-img">
      <n-link :to="`/product/${product.id}`">
        <img class="default-img" src="https://flone.vuejstemplate.com/img/product/fashion/3.jpg" :alt="product.title" />
      </n-link>

      <div
        class="product-action"
      >
        <div class="pro-same-action pro-cart">
          <button class="btn" title="Add To Cart" @click="addToCart(product)">
            <i class="pe-7s-cart"></i>
            Add to cart
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
      <div class="product-rating">
        <i class="fa fa-star-o yellow"></i>
        <i class="fa fa-star-o yellow"></i>
        <i class="fa fa-star-o yellow"></i>
      </div>

      <div class="product-price">
        <span>${{ product.price }}</span>
      </div>
      <div class="product-content__list-view" v-if="layout === 'list'">
        <p>{{ product.desc }}</p>
        <div class="pro-action d-flex align-items-center">
          <div class="pro-cart btn-hover">
            <button class="btn" title="Add To Cart" @click="addToCart(product)">
              <i class="pe-7s-cart"></i>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "layout"],

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

    discountedPrice(product) {
      return product.price - (product.price * product.discount) / 100;
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

    onClick(product) {
      this.$modal.show("quickview", product);
    },

  },
  mounted() {
    console.log("product:"+ this.product)
  },
};
</script>