<template>
    <div class="home-page-wrapper">
        <HeroSliderFour></HeroSliderFour>
        <WelcomeMessage class="pt-50" />
        <Services></Services>
        <ServicePolicyTwo />
        <ProductWrapper :isSectionTitle=true />
        <Categories class="pt-70" :blogData="blogData" :title="'Retail'"></Categories>
        <Categories class="pt-70" :blogData="blogData" :title="'Wholesale'"></Categories>
        <OthersAppsLink class="pt-70"></OthersAppsLink>

           <!--<BlogWrapper />-->
    </div>
</template>

<script>
import blogData from "@/data/blog.json";
import ServicePolicyTwo from "@/components/policy/ServicePolicyTwo.vue";
    export default {
        components: {
          Services:()=>import('@/components/Services.vue'),
          OthersAppsLink:()=>import('@/components/OthersAppsLink.vue'),
          ServicePolicyTwo,
            TheHeader: () => import('@/components/TheHeader'),
            HeroSlider: () => import('@/components/hero/HeroSlider'),
            ServicePolicy: () => import('@/components/policy/ServicePolicy'),
            ProductWrapper: () => import('@/components/product/ProductWrapper'),
            BlogWrapper: () => import('@/components/BlogWrapper'),
            TheFooter: () => import('@/components/TheFooter'),
        },
      data(){
       return {
         blogData
       }
      },
        head() {
            return {
                title: 'Home Fashion One'
            }
        },
    };
</script>


