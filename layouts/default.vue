<template>
    <div>
      <HeaderWithTopbar containerClass="container" />
      <Spinner></Spinner>
        <Nuxt />
        <client-only>
            <notifications position="bottom left" classes='vue-notification success' />
        </client-only>
        <button class="scroll-top" @click="scrollToTop" :class="{ 'show': isVisible }">
            <i class="fa fa-angle-double-up"></i>
        </button>
      <TheFooter />
      <ResponseModal></ResponseModal>
    </div>
</template>

<script>
    import HeaderWithTopbar from "../components/HeaderWithTopbar.vue";
    export default {
      name: "default",
      middleware:['auth'],
      components: {HeaderWithTopbar},
        data() {
            return {
                isVisible: false,
            };
        },
        methods: {
            scrollToTop() {
                window.scroll({
                    top: 0,
                    behavior: "smooth",
                });
            },
        },
        mounted() {
            window.addEventListener("scroll", () => {
                let scroll = window.scrollY;
                if (scroll >= 500) {
                    this.isVisible = true;
                }
                else {
                    this.isVisible = false;
                }
            });
        },
    };
</script>

