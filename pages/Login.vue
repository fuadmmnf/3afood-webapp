<template>
  <div class="shop-page-wrapper">
    <Breadcrumb pageTitle="Login" />

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
            <div class="login-form">
              <form>
                <input type="text" name="user-name" placeholder="Email">
                <input type="password" name="user-password" placeholder="Password">
                <div class="button-box">
                  <div class=" text-center">
                    <a href="#">Forgot Password? </a> <a href="">Already Have a Account?</a>
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
    <TheFooter />
  </div>
</template>

<script setup lang="ts">

import Breadcrumb from "../components/Breadcrumb.vue";
import TheFooter from "../components/TheFooter.vue";
import {ref} from  'vue'


const isActive=ref("Retail");

const comA=(item)=>{
   isActive.value = item;
}
</script>