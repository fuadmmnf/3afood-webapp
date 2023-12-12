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
                                        <th>Until Price</th>
                                        <th>Qty</th>
                                        <th>Subtotal</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product, index) in products" :key="index">
                                        <td class="product-thumbnail">
                                            <n-link :to="`/product/${product.id}`">
                                                <img :src="path+product.img" :alt="product.title">
                                            </n-link>
                                        </td>
                                        <td class="product-name">
                                            <n-link :to="`/product/${product.id}`">{{ product.title }}</n-link>
                                        </td>
                                        <td class="product-price-cart">
                                            <del class="old">${{ product.price.toFixed(2) }}</del>
                                        </td>
                                        <td class="product-quantity">
                                            <div class="cart-plus-minus">
                                                <button @click="decrementProduct(product)" class="dec qtybutton">-</button>
                                                <input class="cart-plus-minus-box" type="text" :value="product.cartQuantity" readonly>
                                                <button @click="incrementProduct(product)" class="inc qtybutton">+</button>
                                            </div>
                                        </td>
                                        <td class="product-subtotal">${{ product.total?.toFixed(2) }}</td>
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
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-12 mx-auto">
                                <div class="grand-total">
                                    <div class="title-wrap">
                                        <h4 class="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                                    </div>
                                    <h5>Total products <span>{{ $store.getters.cartItemCount }}</span></h5>
                                    <h4 class="grand-total-title">Grand Total  <span>${{ total?.toFixed(2) }}</span></h4>
                                    <n-link to="/checkout">Proceed to Checkout</n-link>
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
                            <n-link to="/shop" class="empty-cart__button">Shop Now</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // middleware:['auth'],
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        data() {
            return {
                path:process.env.WEB_DEV_URL,
                singleQuantity: 1
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

            removeProduct(product) {
                // for notification
                this.$notify({ title: 'Item remove from cart!'})

                this.$store.dispatch('removeProductFromCart', product)
            },

            discountedPrice(product) {
                return product.price - (product.price * product.discount / 100)
            },

            clearCart() {
                if (confirm("Are you sure you want to clear cart")) {
                    // for notification
                    this.$notify({ title: 'Item remove from cart!'})
                    
                    this.$store.commit('CLEAR_CART')
                }
            }
        },

        head() {
            return {
                title: "Cart"
            }
        },
    };
</script>
