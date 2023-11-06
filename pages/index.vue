<template>
    <div class="home-page-wrapper">
        <HeroSlider />
        <ServicePolicy />
        <WelcomeMessage class="pt-50- pb-95" />
        <ProductWrapper :isSectionTitle=true />

           <!--<BlogWrapper />-->
    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            HeroSlider: () => import('@/components/hero/HeroSlider'),
            ServicePolicy: () => import('@/components/policy/ServicePolicy'),
            ProductWrapper: () => import('@/components/product/ProductWrapper'),
            BlogWrapper: () => import('@/components/BlogWrapper'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                title: 'Home Fashion One'
            }
        },
    };
</script>


