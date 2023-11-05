<template>
  <div class="shop-page-wrapper">
    <HeaderWithTopbar containerClass="container" />
    <Breadcrumb pageTitle="Register" />

    <div class="login-register-area pt-100 pb-100">
      <div class="container">
        <div class="login-register-tab-list nav">
          <button @click="comA('Retail')" :class="{ active: isActive === 'Retail' }" >
            Retail
          </button>
          <button @click="comA('Wholesale')" :class="{ active: isActive === 'Wholesale' }" >
            Wholesale
          </button>
        </div>
        <div class="row">
          <div class="col-lg-7 col-12 ms-auto me-auto">
            <div class="register-form">
              <form>
                <input type="text" name="user-name" :placeholder="namePlaceholder">
                <input name="user-email" placeholder="Phone" type="number">
                <input name="user-email" placeholder="Email" type="email">
                <input type="password" name="user-password" placeholder="Password">

                <div class="button-box text-center">
                  <button type="submit">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">

import HeaderWithTopbar from "../components/HeaderWithTopbar.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import TheFooter from "../components/TheFooter.vue";
import {ref,computed} from  'vue'

const namePlaceholder=computed(()=>{
    if(isActive.value=='Wholesale'){
      return "Company Name"
    }
    else {
      return "Your Name"
    }
})


const isActive=ref("Retail");
const comA=(item)=>{
  isActive.value = item;
}




</script>