<template>
  <div class="container pt-70">
    <SectionTitleWithSubTitle classes="section-title-2 mb-60" title="Our Services"  />
    <div class="row">
      <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center p-3">
        <img src="/img/services/wholesaler.png"  alt="Wholesale Supply">
        <div class="service-info">
          <h2>Food Services</h2>
          <p>The whole spectrum of marine supply, including provisions and dutyfree goods, deck, engine and electrical equipment.</p>
          <n-link to="/services?type=wholesale" class="default-btn">Learn More</n-link>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center p-3">
       <img src="/img/services/ship-icon.png" alt="Ship Supply">
        <div class="service-info">
          <h2>Ship Supply</h2>
          <p>The whole spectrum of marine supply, including provisions and dutyfree goods, deck, engine and electrical equipment.</p>
          <n-link to="/services?type=ship_supply" class="default-btn">Learn More</n-link>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center p-3">
        <img src="/img/services/shop.png" alt="Retail Supply">
        <div class="service-info">
          <h2>Retail Supply</h2>
          <p>The whole spectrum of marine supply, including provisions and dutyfree goods, deck, engine and electrical equipment.</p>
          <n-link to="/services?type=retail" class="default-btn">Learn More</n-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.service-info{
  padding: 10px;
  text-align: justify;
}
.service-info h2{
  font-size: 25px;
}
img{
  width: 80px;
}

</style>