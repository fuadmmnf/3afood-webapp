<template>
    <div class="contact-area pt-50 pb-100">
        <div class="container">
          <div class="custom-row-2">
                <div class="col-lg-4 col-md-5 col-12">
                    <div class="contact-info-wrap">
                        <div class="single-contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="contact-info-dec">
                                <p>+08 9456 2685</p>

                            </div>
                        </div>
                        <div class="single-contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-globe"></i>
                            </div>
                            <div class="contact-info-dec">
                                <p><a href="#">info@3afoods.com.au</a></p>
                            </div>
                        </div>
                        <div class="single-contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-map-marker"></i>
                            </div>
                            <div class="contact-info-dec">
                                <p>47 Tulloch Way, </p>
                              <p>Canningvale, WA-6155</p>

                            </div>
                        </div>
                        <div class="contact-social text-center">
                            <h3>Follow Us</h3>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i class="fa fa-tumblr"></i></a></li>
                                <li><a href="#"><i class="fa fa-vimeo"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-7 col-12">
                    <div class="contact-form">
                        <div class="contact-title mb-30">
                            <h2>Get In Touch</h2>
                        </div>
                        <form class="contact-form-style" @submit.prevent="submitForm">
                            <div class="row">
                              <div class="col-lg-6">
                                <div class="input">
                                  <input v-model="formData.name" placeholder="Name*" type="text">
                                  <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                                </div>

                              </div>
                              <div class="col-lg-6">
                                <div class="input">
                                  <input v-model="formData.email" placeholder="Email*" type="email">
                                  <span class="text-danger" v-if="errors.email">{{ errors.email }}</span>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="input">
                                  <input v-model="formData.subject" placeholder="Subject*" type="text">
                                  <span class="text-danger" v-if="errors.subject">{{ errors.subject }}</span>
                                </div>
                              </div>
                                <div class="col-lg-12">
                                  <div class="">
                                    <textarea v-model="formData.message" name="message" placeholder="Your Message*"></textarea>
                                    <span class="text-danger" v-if="errors.message">{{ errors.message }}</span>
                                  </div>
                                    <button class="submit" type="submit">SEND</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          <div class="contact-map mt-20">
            <iframe class="map-size" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.2160244480206!2d115.93109767565112!3d-32.06340542782762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bdf773084edd%3A0x8db46b2c34893f6!2s3%2F39%20Tulloch%20Way%2C%20Canning%20Vale%20WA%206155%2C%20Australia!5e0!3m2!1sen!2sbd!4v1699350183486!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      <MessageModal :title="title"></MessageModal>
    </div>
</template>
<script>
export default {
  data() {
    return {
      title:"You Have Successfully Send Your Message to Us",
      formData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      errors: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    validateForm() {
      this.errors = {
        name: '',
        email: '',
        subject: '',
        message: '',
      };

      if (!this.formData.name.trim()) {
        this.errors.name = 'Name is required';
      }

      if (!this.formData.email.trim() || !this.isValidEmail(this.formData.email)) {
        this.errors.email = 'Invalid email address';
      }

      if (!this.formData.subject.trim()) {
        this.errors.subject = 'Subject is required';
      }

      if (!this.formData.message.trim()) {
        this.errors.message = 'Message is required';
      }

      return Object.values(this.errors).every(error => !error);
    },
   async submitForm() {
      try {
        if (this.validateForm()) {
          const response=await this.$axios.post('/contact-us',this.formData)
          this.$modal.show('messageModal')
          console.log('Form submitted:', this.formData);
          this.errors = {
            name: '',
            email: '',
            subject: '',
            message: '',
          };
          this.formData = {
            name: '',
            email: '',
            subject: '',
            message: '',
          };
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

    },
    isValidEmail(email) {
      // Add your email validation logic here
      return /\S+@\S+\.\S+/.test(email);
    },
  },
};
</script>
