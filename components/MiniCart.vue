<template>
  <div class="minicart-wrapper" :class="miniCart">
    <div class="shopping-cart-content" v-if="products.length > 0">
      <ul>
        <li
          class="single-shopping-cart"
          v-for="(product, index) in products"
          :key="index"
        >
          <div class="shopping-cart-img">
            <n-link :to="`/product/${product.id}`">
              <img :src="path+product.img" :alt="product.title" />
            </n-link>
          </div>
          <div class="shopping-cart-title">
            <h4>
              <n-link :to="`/product/${product.id}`">{{
                product.title
              }}</n-link>
            </h4>
            <h6>Qty: {{ product.cartQuantity }}</h6>
            <span v-if="userType==='retail'" >${{ productPrice(product) }}</span>
          </div>
          <div class="shopping-cart-delete">
            <button @click="removeProduct(product)">
              <i class="fa fa-times-circle"></i>
            </button>
          </div>
        </li>
      </ul>
      <div class="shopping-cart-total" v-if="userType==='retail'">
        <h4>
          Total : <span class="shop-total">${{
            parseFloat(total).toFixed(2) }}</span>
        </h4>
      </div>
      <div
        class="shopping-cart-btn btn-hover text-center"
        @click="$emit('minicartClose')"
      >
        <n-link :to="userType==='retail'?'/cart':'/wholesale-cart'" class="default-btn">View Cart</n-link>
        <n-link to="/checkout" v-if="userType==='retail'" class="default-btn">Checkout</n-link>
        <n-link to="/wholesale-checkout" v-else class="default-btn">Ask Price</n-link>
      </div>
    </div>
    <div class="shopping-cart-content text-center" v-else>
      <p>No items added to cart</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ["miniCart"],
  data(){
      return{
        path:""
      }
  },

    computed: {
      userType(){
        return this.$store.getters.getUserType
      },
        products() {
            return this.$store.getters.getCart
        },
        total() {
            return this.$store.getters.getTotal
        }
    },
  methods: {
        removeProduct(product) {
            // for notification
            this.$notify({ title: 'Item remove from cart!'})
            this.$store.dispatch('removeProductFromCart', product)
        },

        productPrice(product) {
            return (product.price*product.cartQuantity).toFixed(1)
        }
    },
  mounted() {
    this.path = process.env.dev? process.env.WEB_DEV_URL: process.env.WEB_BUILD_URL
  },

};
</script>