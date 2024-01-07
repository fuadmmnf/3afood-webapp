<template>
  <div>
    <Breadcrumb pageTitle="Ship Supply Order" />
    <div class="checkout-area pt-95 pb-100">
      <div class="welcome-area">
        <div class="container">
          <div class="welcome-content text-center">
            <h1>PLACE YOUR ORDER ONLINE</h1>
            <p>To place an online order, please download the product list first and fill in the necessary items in the spreadsheet. Once you finish send the Excel order file using the form below.</p>
          </div>
          <div class="text-center py-3">
            <button class="empty-cart__button btn-hover" @click="openProductDownload" >See Product List</button>
          </div>
        </div>
      </div>
      <div class="container pt-50">
        <div class="row">
          <div class="col-lg-7 mx-auto">
            <div class="billing-info-wrap">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20">
                    <label>Your Name</label>
                    <input type="text" v-model="formData.name">
                    <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20">
                    <label>Email</label>
                    <input type="email" v-model="formData.email">
                    <span class="text-danger" v-if="errors.email">{{ errors.email }}</span>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20">
                    <label>Business Name</label>
                    <input type="text" v-model="formData.business_name">
                    <span class="text-danger" v-if="errors.business_name">{{ errors.business_name }}</span>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20">
                    <label>ABN</label>
                    <input type="text" v-model="formData.avn">
                    <span class="text-danger" v-if="errors.avn">{{ errors.avn }}</span>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20">
                    <label>Contact info</label>
                    <input type="text" v-model="formData.contact_info">
                    <span class="text-danger" v-if="errors.contact_info">{{ errors.contact_info }}</span>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-20">
                    <label>Website address</label>
                    <input type="text" v-model="formData.website_name">
                    <span class="text-danger" v-if="errors.website_name">{{ errors.website_name }}</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="billing-info mb-20">
                  <label>File</label>
                  <input class="billing-address" type="file" @change="handleFileChange">
                  <span class="text-danger" v-if="errors.file">{{ errors.file }}</span>
                </div>
              </div>
              <div class="additional-info-wrap">
                <h4>Additional information</h4>
                <div class="additional-info">
                  <label>Order notes</label>
                  <textarea placeholder="Notes about your order, e.g. special notes for delivery." name="message" v-model="formData.additional_info"></textarea>
                </div>
              </div>
              <div class="text-center py-3">
                <button class="empty-cart__button btn-hover" @click.prevent="submitOrder">Place Your Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MessageModal :title="title"></MessageModal>
  </div>

</template>

<script>
export default {
  data() {
    return {
      title:"You Have Successfully Placed Your Inquiry",
      formData: {
        name: '',
        email: '',
        business_name: '',
        avn: '',
        contact_info: '',
        website_name: '',
        file: null,
        additional_info: '',
      },
      errors: {
        name: '',
        email: '',
        business_name: '',
        avn: '',
        contact_info: '',
        website_name: '',
        file: '',
      },
    };
  },
  methods: {
    handleFileChange(event) {
      this.formData.file = event.target.files[0];
    },
    validateForm() {
      this.errors = {
        name: '',
        email: '',
        business_name: '',
        avn: '',
        contact_info: '',
        website_name: '',
        file: '',
      };

      // Sample validation rule for email
      if (!this.formData.email && !this.isValidEmail(this.formData.email)) {
        this.errors.email = 'Invalid email address';
      }

      // Add more validation rules for other fields
      if (!this.formData.name) {
        this.errors.name = 'Your Name is required';
      }

      if (!this.formData.business_name) {
        this.errors.business_name = 'Business Name is required';
      }

      if (!this.formData.contact_info) {
        this.errors.contact_info = 'Contact info is required';
      }


      // Return true if there are no errors
      return Object.values(this.errors).every(error => !error);
    },

    isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    },
    async submitOrder() {
      // Validate the form
      if (this.validateForm()) {
        // Prepare data for submission
        const data = new FormData();
        Object.keys(this.formData).forEach(key => {
          data.append(key, this.formData[key]);
        });
        try {
          // Make API call to submit the order
          const response = await this.$axios.post('/shipping_products_inquiry', data,{
            'Content-Type': 'multipart/form-data',
          });

          this.$modal.show('messageModal')
          // Reset form data after successful submission
          this.resetForm();
        } catch (error) {
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
    resetForm() {
      // Reset form data
      this.formData = {
        name: '',
        email: '',
        businessName: '',
        abn: '',
        contact_info: '',
        website_name: '',
        file: null,
        additional_information: '',
      };
      // Reset errors
      this.errors = {
        name: '',
        email: '',
        business_name: '',
        avn: '',
        contact_info: '',
        website_name: '',
        file: '',
      };
    },
    openProductDownload(){
      window.open("https://docs.google.com/spreadsheets/d/1GhfPxkZupoLJ89DUuXnIHLG-a4iez5dcNsSovW8OX3I/edit?usp=sharing", "_blank");
    }
  },

  head() {
    return {
      title: "Ship Supply"
    }
  },
};

</script>

<style>

</style>