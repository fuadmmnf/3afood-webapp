<template>
  <div class="cart-page-wrapper">
    <Breadcrumb pageTitle="cart" />

    <div class="cart-main-area pt-90 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-12" v-if="products.length > 0">
            <h3 class="cart-page-title">Your cart items</h3>
            <div class="table-content table-responsive cart-table-content">
              <table>
                <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Qty</th>
                  <th>action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(product, index) in products" :key="index">
                  <td class="product-thumbnail">
                    <n-link :to="`/product/${product.id}`">
                      <img v-if="product.img" :src="path+product.img" :alt="product.title">
                      <img v-else :src="getCategoryImage(product?.category?.category_name)" :alt="product.title" />
                    </n-link>
                  </td>
                  <td class="product-name">
                    <n-link :to="`/product/${product.id}`">{{ product.title }}</n-link>
                  </td>
                  <td class="product-quantity">
                    <div class="cart-plus-minus">
                      <button @click="decrementProduct(product)" class="dec qtybutton">-</button>
                      <input class="cart-plus-minus-box" type="text" :value="product.cartQuantity" @input="updateProductQuantity(product, $event)">
                      <button @click="incrementProduct(product)" class="inc qtybutton">+</button>
                    </div>
                  </td>
                  <td class="product-remove">
                    <button @click="removeProduct(product)"><i class="fa fa-times"></i></button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="cart-shiping-update-wrapper">
                  <div class="cart-shiping-update">
                    <n-link to="/our-products">Continue Shopping</n-link>
                  </div>
                  <div class="cart-clear">
                    <button @click="clearCart()">Clear Shopping Cart</button>
                  </div>
                  <div class="cart-clear">
                    <n-link to="/wholesale-checkout">Ask Price</n-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12" v-else>
            <div class="empty-cart text-center">
              <div class="icon">
                <i class="pe-7s-cart"></i>
              </div>
              <h4>No items found in cart</h4>
              <n-link to="/our-products" class="empty-cart__button">Shop Now</n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoryData from "@/data/category.json";

export default {
  // middleware:['auth'],
  components: {
    HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
    Breadcrumb: () => import('@/components/Breadcrumb'),
    TheFooter: () => import('@/components/TheFooter'),
  },
  data() {
    return {
      singleQuantity: 1,
      path:""
    }
  },

  computed: {
    products() {
      return this.$store.getters.getCart
    },

    total() {
      return this.$store.getters.getTotal
    },
  },

  methods: {
    getCategoryImage(category_name){
      return categoryData.find((category)=>category.title===category_name)?.imgSrc
    },
    incrementProduct(product) {
      const prod = { ...product, cartQuantity: 1 }
      this.$store.dispatch('addToCartItem', prod)
    },

    decrementProduct(product) {
      const prod = { ...product, cartQuantity: 1 }
      if (product.cartQuantity > 1) {
        this.$store.dispatch('decreaseProduct', prod)
      }
    },
    updateProductQuantity(product, event) {
      const value = this.$store.getters.getUserType==='retail'? parseInt(event.target.value, 5):parseFloat(event.target.value);
      if (!isNaN(value) && value >= 1) {
        this.$store.dispatch('manualSetCartQuantity', {...product, cartQuantity: value });
      }
    },

    removeProduct(product) {
      // for notification
      this.$notify({ title: 'Item remove from cart!'})

      this.$store.dispatch('removeProductFromCart', product)
    },

    clearCart() {
      if (confirm("Are you sure you want to clear cart")) {
        // for notification
        this.$notify({ title: 'Item remove from cart!'})

        this.$store.commit('CLEAR_CART')
      }
    }
  },
  mounted() {
    this.path = process.env.dev? process.env.WEB_DEV_URL: process.env.WEB_BUILD_URL
  },
  head() {
    return {
      title: "Cart"
    }
  },
};
</script>
