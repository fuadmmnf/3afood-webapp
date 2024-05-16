<template>
    <div class="support-area pt-100 pb-90">
        <div class="container">
          <SectionTitleWithSubTitle classes="section-title-2 mb-60" title="Why Us?" subTitle="The main reasons behind our success" />
            <div class="row mtn-30">
                <div class="col-md-4 col-sm-6 mt-30" v-for="(policy, index) in policies" :key="index">
                    <div class="support-wrap-2 support-shape text-center">
                        <div class="support-content-2">
                            <img :src="policy.icon" :alt="policy.title">
                            <h5>{{ policy.title }}</h5>
                            <p>{{ policy.subTitle }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                policies: [
                    {
                        icon: "/img/icon-img/support-1.png",
                        title: "Fast Response",
                        subTitle: "Quick, efficient service. Your needs are addressed promptly"
                    },
                    {
                        icon: "/img/icon-img/support-2.png",
                        title: "Quality Products",
                        subTitle: "Top-notch selections. Quality assured. Your trusted source for excellence"
                    },
                    {
                        icon: "/img/icon-img/support-3.png",
                        title: "Customer Satisfaction",
                        subTitle: "Your satisfaction drives us. Quality, service, care - every time"

                    }
                ]
            }
        },
    };
</script>
