<template>
  <div class="cart-page-wrapper">
    <Breadcrumb pageTitle="checkout" />

    <!-- checkout section start -->
    <div class="checkout-area pt-95 pb-100">
      <div class="container">
        <div class="row" v-if="products.length > 0">
          <div class="col-lg-7">
            <div class="billing-info-wrap">
              <h3>Billing Details</h3>
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20">
                    <label>First Name</label>
                    <input type="text" v-model="formData.fname">
                    <div v-if="errors.fname" class="error-message">{{ errors.fname }}</div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20" >
                    <label> Last Name</label>
                    <input type="text" v-model="formData.lname">
                    <div v-if="errors.lname" class="error-message">{{ errors.lname }}</div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="billing-info mb-20">
                    <label>Company Name</label>
                    <input type="text" v-model="formData.company_name">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="billing-info mb-20" >
                    <label>Address</label>
                    <input class="billing-address" placeholder="House number and street name" type="text" v-model="formData.address">
                    <div v-if="errors.address" class="error-message">{{ errors.address }}</div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20" >
                    <label>Phone</label>
                    <input type="text" v-model="formData.phone_num">
                    <div v-if="errors.phone_num" class="error-message">{{ errors.phone_num }}</div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20" >
                    <label>Email Address</label>
                    <input type="text" v-model="formData.email">
                    <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
                  </div>
                </div>
              </div>
              <div class="additional-info-wrap">
                <h4>Additional information</h4>
                <div class="additional-info">
                  <label>Order notes</label>
                  <textarea placeholder="Notes about your order, e.g. special notes for delivery. " name="message" v-model="formData.additional_info"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="your-order-area">
              <h3>Your order</h3>
              <div class="your-order-wrap gray-bg-4">
                <div class="your-order-product-info">
                  <div class="your-order-top">
                    <ul>
                      <li>Products</li>
                      <li>Total Quantity</li>
                    </ul>
                  </div>
                  <div class="your-order-middle">
                    <ul>
                      <li v-for="(product, index) in products" :key="index">
                        <span class="order-middle-left">{{ product.title }}  </span> <span class="order-price"> {{ product.cartQuantity }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="place-order mt-25">
                <button class="btn-hover"  @click.prevent="submitOrder">Ask Price</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-12">
            <div class="empty-cart text-center">
              <div class="icon">
                <i class="pe-7s-cash"></i>
              </div>
              <h4>No items found in cart to checkout</h4>
              <n-link to="/our-products" class="empty-cart__button">Shop Now</n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MessageModal :title="title"></MessageModal>
  </div>

</template>

<script>
export default {
  components: {
    HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
    Breadcrumb: () => import("@/components/Breadcrumb"),
    TheFooter: () => import("@/components/TheFooter"),
  },
  data(){
    return{
      title:"You Have Successfully Placed Your Order",
      formData: {
        fname: "",
        lname: "",
        phone_num:"",
        email:"",
        company_name: "",
        address: "",
        additional_info:"",
        total_price:null,
        user_id:'',
        cart:[]
      },
      errors:{}
    }
  },
  computed: {
    products() {
      return this.$store.getters.getCart
    },
    userType(){
      return this.$store.getters.getUserType
    },
    total() {
      return this.$store.getters.getTotal
    },
  },

  methods:{
    validateForm() {
      this.errors = {}; // Clear previous errors

      if (!this.formData.fname.trim()) {
        this.$set(this.errors, 'fname', 'First Name is required');
      }

      if (!this.formData.lname.trim()) {
        this.$set(this.errors, 'lname', 'Last Name is required');
      }

      if (!this.formData.address.trim()) {
        this.$set(this.errors, 'address', 'Address is required');
      }

      if (!this.formData.phone_num.trim()) {
        this.$set(this.errors, 'phone_num', 'Phone Number is required');
      } else if (!/^\d+$/.test(this.formData.phone_num.trim())) {
        this.$set(this.errors, 'phone_num', 'Invalid Phone Number');
      }

      if (!this.formData.email.trim()) {
        this.$set(this.errors, 'email', 'Email is required');
      } else if (!/\S+@\S+\.\S+/.test(this.formData.email.trim())) {
        this.$set(this.errors, 'email', 'Invalid Email');
      }
      return Object.keys(this.errors).length === 0;
    },
    async submitOrder() {
      this.formData.total_price=0
      this.formData.cart=this.products.map(item => ({
        product_id: item.id,
        quantity: item.cartQuantity,
        price: 0,
      }));
      console.log("Form Data:",this.formData)

      if (this.validateForm()) {
        try {
          const response=await this.$axios.post("/orders",this.formData)
          this.$modal.show('messageModal')
          this.formData = {
            fname: "",
            lname: "",
            company_name: "",
            address: "",
            phone_num: "",
            email: "",
            additional_info: "",
          };
          this.$store.commit('CLEAR_CART')
        }catch (error){

        }
      }


    }

  },
  head() {
    return {
      title: "Checkout"
    }
  },
};
</script>

<style scoped>
.error {
  border: 1px solid red;
  padding: 4px;
}

.error-message {
  color: red;
  margin-top: 5px;
}
</style>
