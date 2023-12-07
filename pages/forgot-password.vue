<template>
  <div class="shop-page-wrapper">
    <Breadcrumb pageTitle="Forgot Password" />
    <div class="login-register-area pt-100 pb-100">
      <div class="container">
        <div class="login-register-tab-list nav">
          <span class="active">
            Reset Password
          </span>
        </div>
        <div class="row">
          <div class="col-lg-7 col-12 ms-auto me-auto">
            <div class="login-form">
              <form>
                <p class="text-center text-danger" v-if="errors.credentials">
                  {{ errors.credentials }}
                </p>
                <p class="text-center text-success-emphasis" v-if="success">
                  {{ success }}
                </p>
                <div class="input-div">
                  <input
                      v-model="formData.email"
                      placeholder="Email"
                      type="email"
                  />
                  <span class="text-danger" v-if="errors.email">{{
                      errors.email
                    }}</span>
                </div>
                <div class="button-box">
                  <div class="text-center pt-1">
                    <button type="submit" @click.prevent="forgot_password">Reset</button>
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
      formData: {
        email: "",
      },
      errors: {
        credentials: false,
      },
      success:false
    };
  },
  methods: {
    isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    },
    validateForm() {
      // Reset errors
      this.errors = {
        credentials: false,
        email: false,
      };

      // Validation rules
      const validationRules = {
        email: {
          condition:
              !this.formData.email || !this.isValidEmail(this.formData.email),
          message: "Invalid email address",
        },
      };

      // Check validation rules
      Object.keys(validationRules).forEach((field) => {
        if (validationRules[field].condition) {
          this.errors[field] = validationRules[field].message;
        }
      });
      // Return true if there are no errors
      return !Object.values(this.errors).some((error) => error);
    },
    async forgot_password() {
      // Reset errors
      this.success=false;
      if (this.validateForm()) {
        try {
          const response = await this.$axios.post("/reset-password", this.formData);
          console.log(response)
          this.success= response.data.message
        } catch (error) {
          this.errors.credentials=error.response.data.message
        }
      }
    },
  },
  head() {
    return {
      title: "Forgot-Password"
    }
  },
};
</script>