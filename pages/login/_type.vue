<template>
  <div class="shop-page-wrapper">
    <Breadcrumb pageTitle="Login" />

    <div class="login-register-area pt-100 pb-100">
      <div class="container">
        <div class="login-register-tab-list nav">
          <span class="active">
             {{type}}
          </span>
        </div>
        <div class="row">
          <div class="col-lg-7 col-12 ms-auto me-auto">
            <div class="login-form">
              <form>
                <input type="text" name="user-name" placeholder="Email">
                <input type="password" name="user-password" placeholder="Password">
                <div class="button-box">
                  <div class=" text-center">
                    <a href="#">Forgot Password? </a><router-link :to="'/register/' + type">Create Account</router-link>
                  </div>
                  <div class="text-center pt-5">
                    <button type="submit">Login</button>
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

<script >

export default {
  data() {
    return {
      type: this.$route.params.type
    }
  }
}
</script>