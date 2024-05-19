<template>
    <div class="banner-area">
        <div class="container">
            <div class="row mtn-30">
                <div class="col-md-6 mt-30" v-for="(banner, index) in banners" :key="index">
                    <BannerItem :banner="banner" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            banners: [
                {
                    id: 1,
                    title: "Watches",
                    imgSrc: "/img/mission/tamanna-rumee-dqVPEGkuR_U-unsplash.jpg"
                },
                {
                    id: 2,
                    title: "Plo Bag",
                    imgSrc: "/img/mission/mike-bergmann-tHjXXy1kk_Q-unsplash.jpg"
                },
            ]
        };
    },
};
</script>