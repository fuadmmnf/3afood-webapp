<template>
  <div class="cart-page-wrapper">
    <Breadcrumb pageTitle="orders-history" />

    <div class="cart-main-area pt-90 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-10 mx-auto" v-if="orders.length > 0">
            <h3 class="cart-page-title text-center">Your Orders</h3>
            <div class="table-content table-responsive cart-table-content">
              <table>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact Info</th>
                  <th>Products</th>
                  <th>Total Price</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(order, index) in orders" :key="index">
                  <td>
                     {{ order.fname }} {{ order.lname }} <br />
                   {{ order.company_name }}
                  </td>
                  <td>
                    <i class="pe-7s-map-marker"></i> {{ order.address }} <br />
                    <i class="pe-7s-phone"></i> {{ order.phone_num }} <br />
                    <i class="pe-7s-mail"></i>  {{ order.email }}
                  </td>
                  <td>
                    <div v-for="(product, productIndex) in order.products" :key="productIndex">

                      {{ product.title }} X {{$store.getters.getUserType==='retail'?parseInt(product.quantity):product.quantity }} {{$store.getters.getUserType==='retail'?`= $${product.price}`:''}}
                    </div>
                  </td>
                  <td>${{ order.total_price }}</td>
                  <td>{{ order.status }}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-12" v-else>
            <div class="empty-cart text-center">
              <div class="icon">
                <i class="pe-7s-cart"></i>
              </div>
              <h4>No orders found in order history</h4>
              <n-link to="/our-products" class="empty-cart__button">Shop Now</n-link>
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
      orders:[]
    }
  },

  methods: {
    async fetchData(){
      try {
        const response=await this.$axios.get('/orders/history')
        console.log(response.data.data)
        this.orders=response.data.data;
        console.log(this.orders)
      }catch (error){
        console.log(error)
      }
    }

  },
  mounted() {
    this.fetchData();
  },

  head() {
    return {
      title: "Orders History"
    }
  },
};
</script>