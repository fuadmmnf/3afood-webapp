<template>
  <div class="shop-page-wrapper">
    <Breadcrumb pageTitle="Login" />
    <div class="login-register-area pt-100 pb-100">
      <div class="container">
        <div class="login-register-tab-list nav">
          <span class="active">
            Login
          </span>
        </div>
        <div class="row">
          <div class="col-lg-7 col-12 ms-auto me-auto">
            <div class="login-form">
              <form>
                <p class="text-center text-danger" v-if="errors.credentials">
                  {{ errors.credentials }}
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
                <div class="input-div">
                  <input v-model="formData.password" type="password" placeholder="Password" />
                  <span class="text-danger" v-if="errors.password">{{
                      errors.password
                    }}</span>
                </div>
                <div class="button-box">
                  <div class="text-center">
                    <n-link to="/forgot-password">
                      Forgot Password?
                    </n-link>
                  </div>
                  <div class="text-center pt-5">
                    <button type="submit" @click.prevent="login">Login</button>
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
        password: "",
      },
      errors: {
        credentials: false,
        email: false,
        password: false,
      },
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
        password: false,
      };

      // Validation rules
      const validationRules = {
        email: {
          condition:
              !this.formData.email || !this.isValidEmail(this.formData.email),
          message: "Invalid email address",
        },
        password: {
          condition: !this.formData.password,
          message: "Password Field cant be empty",
        },
        // Add more fields as needed
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
    async login() {
      // Reset errors
      if (this.validateForm()) {
        try {
          const response = await this.$axios.post("/login", this.formData);
          // console.log(response)
          const user = {
            name: (() => {
              const firstName = response.data.data.name.split(' ')[0];

              if (firstName.length > 7) {
                return firstName.substring(0, 5) + '..';
              } else {
                return firstName;
              }
            })(),
            token: response.data.data.token,
            type: response.data.data.user_type,
          };
          await this.$store.dispatch("saveUserInfo", user);
          await this.$router.push("/");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.errors.credentials=error.response.data.message
          }
        }
      }
    },
  },
  head() {
    return {
      title: "Login"
    }
  },
};
</script>