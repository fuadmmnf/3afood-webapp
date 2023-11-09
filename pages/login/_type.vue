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
                <div class="input-div">
                  <input v-model="formData.email" placeholder="Email" type="email" />
                  <span class="text-danger" v-if="errors.email">{{errors.email}}</span>
                </div>
                <div class="input-div">
                  <input v-model="formData.password" placeholder="Password" type="password" />
                  <span class="text-danger" v-if="errors.password">{{errors.password}}</span>
                </div>
                <div class="button-box">
                  <div class=" text-center">
                    <a href="#">Forgot Password? </a><router-link :to="'/register/' + type">Create Account</router-link>
                  </div>
                  <div class="text-center pt-5">
                    <button type="submit" @click.prevent="login" >Login</button>
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
      formData:{
        email:"",
        password:""
      },
      errors: {
        email: '',
        password: '',
      },
      type: this.$route.params.type
    }
  },
  methods:{
    isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    },
    login(){
      // Reset errors
      this.errors = {
        email: '',
        password: '',
      };

      // Perform validation
      if (!this.formData.email || !this.isValidEmail(this.formData.email)) {
        this.errors.email = "Invalid Email Address";
      }
      if (!this.formData.password.length) {
        this.errors.password = "Password field cant be empty";
      }

      // Check if there are any errors before proceeding
      if (Object.values(this.errors).some((error) => error)) {
        return; // Do not proceed if there are errors
      }
      const user={
        name:"Rahat",
        email:this.formData.email,
        type:this.type
      }
      this.$store.dispatch('saveUserInfo',user)
      this.$router.push("/");
    }
  }
}
</script>