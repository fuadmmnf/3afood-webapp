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
              <form @submit.prevent="signup">
                <div class="input-div">
                  <input v-model="formData.name" :placeholder="placeholder" />
                  <span class="text-danger" v-if="errors.name">Name field cannot be empty</span>
                </div>
                <div class="input-div">
                  <input v-model="formData.phone" placeholder="Phone" type="number" />
                  <span class="text-danger" v-if="errors.phone">Phone field cannot be empty</span>
                </div>
                <div class="input-div">
                  <input v-model="formData.email" placeholder="Email" type="email" />
                  <span class="text-danger" v-if="errors.email">Invalid email address</span>
                </div>
                <div class="input-div">
                  <input v-model="formData.password" placeholder="Password" />
                  <span class="text-danger" v-if="errors.password">Password must be at least 6 characters long</span>
                </div>
                <div class="button-box">
                  <div class="text-center">
                    Already Have an Account? <router-link :to="'/login/' + type">Sign In</router-link>
                  </div>
                  <div class="text-center pt-5">
                    <button type="submit" @click.prevent="signup">Register</button>
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
      formData:{
        name:'',
        phone:'',
        email:"",
        password:""
      },
      errors: {
        name: false,
        phone: false,
        email: false,
        password: false,
      },
      type: this.$route.params.type
    }
  },
  computed:{
    placeholder(){
      return this.type==='wholesale'?"Company Name":"Your Name"
    }
  },
  methods:{
    signup() {
      // Reset errors
      this.errors = {
        name: false,
        phone: false,
        email: false,
        password: false,
      };

      // Perform validation
      if (!this.formData.name) {
        this.errors.name = true;
      }
      if (!this.formData.phone) {
        this.errors.phone = true;
      }
      if (!this.formData.email || !this.isValidEmail(this.formData.email)) {
        this.errors.email = true;
      }
      if (this.formData.password.length < 6) {
        this.errors.password = true;
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
    },

    isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    },
  }

}


</script>