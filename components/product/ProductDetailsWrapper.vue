<template>
    <div class="shop-area pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="product-details-slider">
                        <div class="product-details-img">
                          <img class="img-fluid" v-if="product.img" :src="path+product.img" :alt="product.title">
                          <img class="img-fluid" v-else :src="getCategoryImage(product?.category?.category_name)" :alt="product.title" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="product-details-content ml-70">
                        <h2>{{ product.title }}</h2>
                        <div class="product-details-price">
                            <span v-if="userType==='retail'">${{ product.price}}</span>
                        </div>
                        <p>{{ product.desc }}</p>

                        <div class="pro-details-quality">
                            <div class="cart-plus-minus">
                                <button @click="decreaseQuantity()" class="dec qtybutton">-</button>
                                <input class="cart-plus-minus-box" type="text"  v-model="singleQuantity" :readonly="userType==='retail'">
                                <button @click="increaseQuantity()" class="inc qtybutton">+</button>
                            </div>
                            <div class="pro-details-cart btn-hover">
                                <button @click="addToCart(product)">Add To Cart</button>
                            </div>
                        </div>
                        <div class="pro-details-meta">
                            <span class="label">Food Category: {{product.category?.category_name}}</span>
                            <ul>
                            </ul>
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
        props: ['product'],

        data() {
            return {
              path:'',
              singleQuantity: 1,
            }
        },
        computed:{
          userType(){
            return this.$store.getters.getUserType
          },
        },

      methods: {
        getCategoryImage(category_name){
          return categoryData.find((category)=>category.title===category_name)?.imgSrc
        },
            addToCart(product) {

                const prod = {...product, cartQuantity:this.userType==='retail'?(this.singleQuantity):parseFloat(this.singleQuantity)}
                // for notification
                if (this.$store.state.cart.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Already added to cart update with one' })
                } else {
                    this.$notify({ title: 'Add to cart successfully!'})
                }
                this.$store.dispatch('addToCartItem', prod)
            },

            discountedPrice(product) {
                return product.price - (product.price * product.discount / 100)
            },

            increaseQuantity(){
                 this.singleQuantity++
            },

            decreaseQuantity() {
                if(this.singleQuantity > 1) this.singleQuantity--
            },

            addToWishlist(product) {
                // for notification
                if (this.$store.state.wishlist.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Already added to wishlist!' })
                } else {
                    this.$notify({ title: 'Add to wishlist successfully!'})
                }
                this.$store.dispatch('addToWishlist', product)
            },

            addToCompare(product) {
                // for notification
                if (this.$store.state.compare.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Already added to compare!' })
                } else {
                    this.$notify({ title: 'Add to compare successfully!'})
                }
                this.$store.dispatch('addToCompare', product)
            },

        },
      mounted() {
        this.path = process.env.dev? process.env.WEB_DEV_URL: process.env.WEB_BUILD_URL
        console.log(this.product)
      },
    };
</script>