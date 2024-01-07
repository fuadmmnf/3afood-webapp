<template>
  <div class="shop-page-wrapper">
    <Breadcrumb pageTitle="Register" />

    <div class="login-register-area pt-100 pb-100">
      <div class="container">
        <div class="login-register-tab-list nav">
          <span class="active">
            {{ type }}
          </span>
        </div>
        <div class="row">
          <div class="col-lg-7 col-12 ms-auto me-auto">
            <div class="register-form">
              <form @submit.prevent="signup">
                <div class="input-div">
                  <input v-model.trim="formData.name" placeholder="Name" />
                  <span class="text-danger" v-if="errors.name">{{
                    errors.name
                  }}</span>
                </div>
                <div class="input-div" v-if="type!=='retail'">
                  <input v-model.trim="formData.company_name"  placeholder="Company Name*" />
                  <span class="text-danger" v-if="errors.company_name">{{
                      errors.company_name
                    }}</span>
                </div>
                <div class="input-div" v-if="type!=='retail'">
                  <input v-model.trim="formData.avn"  placeholder="AVN*" />
                  <span class="text-danger" v-if="errors.avn">{{
                      errors.avn
                    }}</span>
                </div>
                <div class="input-div">
                  <input
                    v-model.trim="formData.phone"
                    placeholder="Phone"
                    type="number"
                  />
                  <span class="text-danger" v-if="errors.phone">{{
                    errors.phone
                  }}</span>
                </div>
                <div class="input-div">
                  <input
                    v-model.trim="formData.email"
                    placeholder="Email*"
                    type="email"
                  />
                  <span class="text-danger" v-if="errors.email">{{
                    errors.email
                  }}</span>
                </div>
                <div class="input-div">
                  <input v-model="formData.password" type="password" placeholder="Password*" />
                  <span class="text-danger" v-if="errors.password">{{
                    errors.password
                  }}</span>
                </div>
                <div class="button-box">
                  <div class="text-center">
                    Already Have an Account?
                    <router-link to="/login">Sign In</router-link>
                  </div>
                  <div class="text-center pt-5">
                    <button type="submit" @click.prevent="signup">
                      Register
                    </button>
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
        name: "",
        company_name:"",
        avn:"",
        phone: "",
        email: "",
        password: "",
      },
      errors: {
        name: false,
        phone: false,
        email: false,
        password: false,
      },
      type: this.$route.params.type,
    };
  },
  computed: {
    placeholder() {
      return this.type === "wholesale" ? "Company Name" : "Your Name";
    },
  },
  methods: {
    isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    },
    validateForm() {
      // Reset errors
      this.errors = {
        name: false,
        company_name: false,
        avn: false,
        phone: false,
        email: false,
        password: false,
      };

      // Validation rules
      const validationRules = {
        retail: {
          name: {
            condition: !this.formData.name,
            message: 'Name field cannot be empty',
          },
          email: {
            condition: !this.formData.email || !this.isValidEmail(this.formData.email),
            message: 'Invalid email address',
          },
          password: {
            condition: this.formData.password.length < 6,
            message: 'Password must be at least 6 characters long',
          },
        },
        wholesale: {
          company_name: {
            condition: !this.formData.company_name,
            message: 'Company Name field cannot be empty',
          },
          avn: {
            condition: !this.formData.avn,
            message: 'AVN field cannot be empty',
          },
          email: {
            condition: !this.formData.email || !this.isValidEmail(this.formData.email),
            message: 'Invalid email address',
          },
          password: {
            condition: this.formData.password.length < 6,
            message: 'Password must be at least 6 characters long',
          },
        },
      };

      // Check validation rules based on user type
      const userTypeRules = validationRules[this.type==='ship_supply'?'wholesale':this.type];
      Object.keys(userTypeRules).forEach((field) => {
        if (userTypeRules[field].condition) {
          this.errors[field] = userTypeRules[field].message;
        }
      });

      // Return true if there are no errors
      return !Object.values(this.errors).some((error) => error);
    },
    async signup() {
      if (this.validateForm()) {
        try {
          const response=await this.$axios.post("/register", {...this.formData,
          'usertype':this.type
          })
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
            type: response.data.data.user_type,
            token: response.data.data.token,
          };
          await this.$store.dispatch("saveUserInfo", user);

          if(response.data.data.user_type==='ship_supply'){
            await this.$router.push("/ship-supply");
          }
          else {
            await this.$router.push("/our-products");
          }


        }catch (error){
          if (error.response && error.response.data && error.response.data.errors) {
            const apiErrors = error.response.data.errors;
            // Update errors based on API response
            Object.keys(apiErrors).forEach((field) => {
              if (this.errors.hasOwnProperty(field)) {
                // Update error message dynamically from API response
                this.errors[field] = apiErrors[field][0];
              }
            });
          }
        }

      }

    },
  },
  head() {
    return {
      title: "Register"
    }
  },

};
</script>