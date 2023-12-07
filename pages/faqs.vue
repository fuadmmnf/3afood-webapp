<template>
  <div class="shop-page-wrapper">
    <Breadcrumb pageTitle="frequently asked questions" />
    <div class="my-account-area pb-80 pt-100">
      <div class="container">
        <div class="row">
          <div class="ms-auto me-auto col-lg-9">
            <div class="my-account-wrapper">
              <div id="faq" class="panel-group">
                <div class="panel panel-default single-my-account" v-for="faq in faqs" :key="faq.id">
                  <div class="panel-heading my-account-title" >
                    <h3 class="panel-title">
                      <span>{{faq.id}} .</span>
                      <a data-bs-toggle="collapse" :href="'#my-account-'+faq.id"
                      >{{faq.question}}
                      </a>
                    </h3>
                  </div>
                  <div
                      :id="'my-account-'+faq.id"
                      class="panel-collapse collapse"
                      data-bs-parent="#faq"
                  >
                    <div class="panel-body">
                      <div class="myaccount-info-wrapper">
                      {{faq.answer}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    return {
      faqs:[]
    }
  },
  mounted() {
    this.fetchData()
  },
  methods:{
    async fetchData(){
      try {
        const response=await this.$axios.get('/faqs')
        this.faqs=response.data.data
      }catch (error){
        console.log(error)
      }
    }
  },

  head() {
    return {
      title: "FAQs",
    };
  },

};
</script>