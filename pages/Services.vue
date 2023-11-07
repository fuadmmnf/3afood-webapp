<template>
  <div class="shop-page-wrapper">
    <Breadcrumb pageTitle="Services" />
     <div class="container pt-100 pb-50">
       <div class="row service-item">
         <div class="col-lg-5 col-md-8 col-10 mx-auto">
           <h4 class="service-title">
             Ship Supply
           </h4>
           <p class="service-des">
             We offer a wide range of provisions and bond goods required by the crew. We source our fresh fruit & vegetables, meat, chilled and dry provisions locally. We are also specialised on ethnic spices and foods for transnational crew needs. Click here for our product list.
           </p>
         </div>
         <div class="col-lg-5 col-md-8 col-10 mx-auto">
           <div class="service-img">
             <img class="" src="https://www.3afoods.com.au/wp-content/uploads/2020/08/shutterstock_1674592507_sm.jpg" alt="">
           </div>
         </div>
       </div>
       <div class="row service-item">
         <div class="col-lg-5 col-md-8 col-10 mx-auto">
           <h4 class="service-title">
             Food Services
           </h4>
           <p class="service-des">
             We supply all catering necessities to hotels, restaurants, cafes, pizza shops and offices in Western Australia. We offer an extensive product range including dry products, meats, frozen foods (seafoods & vegetables), cleaning materials, packaging and disposable items. We always respond very fast and offer the highest quality with a competitive price because "Customer Satisfaction" is our priority.
             To learn more about our products and services please <router-link class="text-warning" to="/contact">contact us</router-link>
           </p>
         </div>
         <div class="col-lg-5 col-md-8 col-10 mx-auto">
           <div class="service-img">
             <img src="https://www.3afoods.com.au/wp-content/uploads/2019/03/foods_service.jpg" alt="">
           </div>
         </div>
       </div>
     </div>
  </div>
</template>

<script>

</script>

<style scoped>
.service-item{
  margin-top: 30px;
  padding: 25px 20px;
}
.service-item .service-title{
  font-size: 30px;
  font-weight: bolder;
  padding: 20px 0;
}
.service-item .service-img{
  padding: 15px;
}

.service-item .service-img img {
border-radius: 10px;
}

</style>