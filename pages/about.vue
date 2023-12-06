<template>
    <div class="about-page-wrapper">
        <Breadcrumb pageTitle="about us" />
        <WelcomeMessage class="pt-100 pb-95" />
        <BannerStyleOne class="pb-70" />
        <AboutMission />
      <OthersAppsLink class="pt-70"></OthersAppsLink>

    </div>
</template>

<script>
    export default {
        components: {
            Breadcrumb: () => import('@/components/Breadcrumb'), 
            WelcomeMessage: () => import('@/components/WelcomeMessage'), 
            BannerStyleOne: () => import('@/components/banner/BannerStyleOne'), 
            AboutMission: () => import('@/components/AboutMission'), 
            FunFact: () => import('@/components/FunFact'), 
            TeamMembers: () => import('@/components/TeamMembers'), 
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'), 
            TheFooter: () => import('@/components/TheFooter'),
            OthersAppsLink:()=>import('@/components/OthersAppsLink.vue'),
        },
        head() {
            return {
                title: "About Us"
            }
        }
    };
</script>
