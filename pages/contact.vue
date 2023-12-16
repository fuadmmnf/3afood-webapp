<template>
    <div class="shop-page-wrapper">
        <Breadcrumb pageTitle="contact us" />
        <ContactInfo />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            ContactInfo: () => import('@/components/ContactInfo'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TheFooter: () => import('@/components/TheFooter')
        },
        head() {
            return {
                title: "Contact Us"
            }
        }
    };
</script>
