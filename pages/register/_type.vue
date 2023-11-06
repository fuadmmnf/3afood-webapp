<template>
  <div class="shop-page-wrapper">
    <Breadcrumb pageTitle="Register" />

    <div class="login-register-area pt-100 pb-100">
      <div class="container">
        <div class="login-register-tab-list nav">
           <span class="active">
             {{type}}
          </span>
        </div>
        <div class="row">
          <div class="col-lg-7 col-12 ms-auto me-auto">
            <div class="register-form">
              <form>
                <input type="text" name="user-name" :placeholder="placeholder">
                <input name="user-email" placeholder="Phone" type="number">
                <input name="user-email" placeholder="Email" type="email">
                <input type="password" name="user-password" placeholder="Password">

                <div class="button-box ">
                  <div class=" text-center ">
                    Already Have a Account?  <router-link :to="'/login/' + type">Sign In</router-link>
                  </div>
                  <div class="text-center pt-5">
                    <button type="submit">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      type: this.$route.params.type
    }
  },
  computed:{
    placeholder(){
      return this.type==='wholesale'?"Company Name":"Your Name"
    }
  }

}


</script>