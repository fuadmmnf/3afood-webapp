<template>
    <ul>
      <li v-if="!$store.getters.isAuthenticated">
        <n-link  to="/">Home </n-link>
      </li>
      <li v-if="$store.getters.isRetail || $store.getters.isWholesale ">
        <n-link to="/our-products">Our Products</n-link>
      </li>
      <li v-if="$store.getters.isShipSupply">
        <n-link to="/ship-supply">Ship Supply</n-link>
      </li>
      <li>
        <n-link to="/about">About Us </n-link>
      </li>

<!--      <li>-->
<!--        <n-link to="/faqs">FAQs </n-link>-->
<!--      </li>-->

<!--      <li>-->
<!--        <n-link to="/services">Services</n-link>-->
<!--      </li>-->
      <li>
        <n-link to="/contact">Contact Us</n-link>
      </li>
    </ul>
</template>
<script setup>
</script>