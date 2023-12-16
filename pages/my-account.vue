<template>
  <div class="shop-page-wrapper">
    <Breadcrumb pageTitle="my-account" />
    <div class="my-account-area pb-80 pt-100">
      <div class="container">
        <div class="row">
          <div class="ms-auto me-auto col-lg-9">
            <div class="my-account-wrapper">
              <div id="faq" class="panel-group">
                <div class="panel panel-default single-my-account">
                  <div class="panel-heading my-account-title">
                    <h3 class="panel-title">
                      <span>1 .</span>
                      <a data-bs-toggle="collapse" href="#my-account-1"
                        >Edit your account information
                      </a>
                    </h3>
                  </div>
                  <div
                    id="my-account-1"
                    class="panel-collapse collapse show"
                    data-bs-parent="#faq"
                  >
                    <div class="panel-body">
                      <div class="myaccount-info-wrapper">
                        <div class="account-info-wrapper">
                          <h4>My Account Information</h4>
                          <h5>Your Personal Details</h5>
                        </div>
                        <div class="row">
                          <div class="col-lg-12 col-md-6">
                            <div class="billing-info">
                              <label>{{
                                userType === "retail"
                                  ? "Your Name"
                                  : "Company Name"
                              }}</label>
                              <input type="text" v-model.trim="userInfo.name" />
                              <span class="text-danger" v-if="errors.name">{{
                                errors.name
                              }}</span>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="billing-info">
                              <label>Email Address</label>
                              <input
                                type="email"
                                v-model.trim="userInfo.email"
                              />
                              <span class="text-danger" v-if="errors.email">{{
                                errors.email
                              }}</span>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="billing-info">
                              <label>Phone</label>
                              <input
                                type="text"
                                v-model.trim="userInfo.phone"
                              />
                              <span class="text-danger" v-if="errors.phone">{{
                                errors.phone
                              }}</span>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="billing-info">
                              <label>Current Password</label>
                              <input
                                type="text"
                                v-model.trim="userInfo.current_password"
                              />
                              <span
                                class="text-danger"
                                v-if="errors.current_password"
                                >{{ errors.current_password }}</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="billing-back-btn">
                          <div class="billing-btn">
                            <button @click.prevent="update">Update</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default single-my-account">
                  <div class="panel-heading my-account-title">
                    <h3 class="panel-title">
                      <span>2 .</span>
                      <a data-bs-toggle="collapse" href="#my-account-2"
                        >Change your password
                      </a>
                    </h3>
                  </div>
                  <div
                    id="my-account-2"
                    class="panel-collapse collapse"
                    data-bs-parent="#faq"
                  >
                    <div class="panel-body">
                      <div class="myaccount-info-wrapper">
                        <div class="row">
                          <div class="col-lg-12 col-md-12">
                            <div class="billing-info">
                              <label>Old Password</label>
                              <input type="password" v-model="updatePasswordInfo.old_password"/>
                              <span
                                  class="text-danger"
                                  v-if="password_errors.old_password"
                              >{{ password_errors.old_password }}</span
                              >
                            </div>
                          </div>
                          <div class="col-lg-12 col-md-12">
                            <div class="billing-info">
                              <label>New Password </label>
                              <input type="password" v-model="updatePasswordInfo.new_password" />
                              <span
                                  class="text-danger"
                                  v-if="password_errors.new_password"
                              >{{ password_errors.new_password }}</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="billing-back-btn">
                          <div class="billing-btn">
                            <button @click.prevent="updatePassword" >Update</button>
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
    </div>
    <MessageModal :title="title" ></MessageModal>
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
       title:"",
       userInfo:{
         name:'',
         email:'',
         phone:'',
         current_password:'',
         type:this.userType
       },
       updatePasswordInfo:{
         old_password:'',
         new_password:''
       },
       password_errors:{
         old_password:false,
         new_password:false
       },
       errors:{
         name:false,
         email:false,
         phone:false,
         current_password:false
       }
     }
  },
  mounted() {
    this.fetchData()
  },
  computed: {
    userType() {
      return this.$store.getters.getUserType;
    },
  },

  methods:{
    isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    },
    validateForm() {
      // Reset errors
      this.errors = {
        name: false,
        phone: false,
        email: false,
        current_password: false,
      };

      // Validation rules
      const validationRules = {
        name: {
          condition: !this.userInfo.name,
          message: 'Name field cannot be empty',
        },
        phone: {
          condition: !this.userInfo.phone,
          message: 'Phone field cannot be empty',
        },
        email: {
          condition: !this.userInfo.email || !this.isValidEmail(this.userInfo.email),
          message: 'Invalid email address',
        },
        current_password: {
          condition: !this.userInfo.current_password,
          message: 'You have to enter your current password to update your information',
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
    async update() {
      if (this.validateForm()) {
        try {
          const response=await this.$axios.patch("/users/update-account", this.userInfo)
          console.log(response)
          await this.fetchData();
          let firstName = this.userInfo.name
          if (firstName.length > 7) {
                firstName= firstName.substring(0, 5) + '..';
          }
          this.$store.commit('UPDATE_USER_NAME',firstName)
          this.title=response.data.message;
          this.$modal.show('messageModal')


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

    async updatePassword(){
      this.password_errors = {
        old_password: false,
        new_password: false
      };
      const validationRules = {
        name: {
          condition: !this.updatePasswordInfo.old_password,
          message: 'You have to enter your current password to create a new password',
        },
        phone: {
          condition: !this.updatePasswordInfo.new_password,
          message: 'Enter your new password',
        },
      }
      Object.keys(validationRules).forEach((field) => {
        if (validationRules[field].condition) {
          this.password_errors[field] = validationRules[field].message;
        }
      });

      if(!Object.values(this.password_errors).some((error) => error)){
         try {
           const response=await this.$axios.patch("/users/change-password", this.updatePasswordInfo)
           this.title=response.data.message;
           this.$modal.show('messageModal')
           this.updatePasswordInfo={
             old_password: '',
             new_password: ''
           }

         }catch (error){
           if (error.response && error.response.data && error.response.data.errors) {
             const apiErrors = error.response.data.errors;
             // Update errors based on API response
             Object.keys(apiErrors).forEach((field) => {
               if (this.password_errors.hasOwnProperty(field)) {
                 // Update error message dynamically from API response
                 this.password_errors[field] = apiErrors[field][0];
               }
             });
           }
         }
      }



        },

    async fetchData(){
          try {
            const response=await this.$axios.get('/users/user')
            this.userInfo={
              name:response.data.data.name,
              email: response.data.data.email,
              phone: response.data.data.phone,
            }
          }catch (error){
            console.log(error)
          }
    }
  },

  head() {
    return {
      title: "My Account",
    };
  },

};
</script>