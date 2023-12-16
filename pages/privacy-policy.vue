<template>
    <div class="privacy-policy-wrapper">
        <Breadcrumb pageTitle="privacy policy" />

        <!-- privacy policy content start -->
        <section class="policy-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="policy-list">
                          <p> This Privacy Policy sets out our commitment to protecting the privacy of your
                            personal information that we collect through this website <router-link to="/" class="text-warning"> http://www.3afoods.com.au</router-link>
                            or directly from you. Please read this Privacy Policy carefully.  Please contact us if you have any questions. You are providing us with personal information indicate that you have had sufficient opportunity to access this Privacy Policy and that you have read and accepted it. If you do not wish to provide personal information to us, then you do not have to do so, however,
                            it may affect your use of this Site or any products and services offered on it.</p>
                        </div>
                        <div class="policy-list">
                            <h3 class="policy-title">Type of personal information collected</h3>
                            <p>The type of personal information we collect may include your name, address, ABN, mobile number, e-mail address etc. If we receive your personal information from third parties, we will protect it as set out in this Privacy Policy.</p>
                        </div>

                      <div class="policy-list">
                        <h3 class="policy-title">Collection and use of personal information</h3>
                       <p>We collect and use the personal information for purposes including contacting and communicating with you, for internal record keeping and for marketing.</p>
                      </div>
                      <div class="policy-list">
                        <h3 class="policy-title">Disclosure of personal information</h3>
                        <p>We may disclose personal information for purposes including providing our products and services to you, and as required by law. Where we disclose your personal information to third parties for these purposes, we will request that the third party follow this Privacy Policy regarding handling of your personal information.</p>
                      </div>
                      <div class="policy-list">
                        <h3 class="policy-title">Access to and correction of personal information</h3>
                       <p>Access: You may request details of personal information that we hold about you, in certain circumstances set out in the Privacy Act 1988.  An administrative fee may be payable for the provision of information.  We may refuse to provide you with information that we hold about you, in certain circumstances set out in the Privacy Act.</p>
                       <p>Correction: If you believe that any information, we hold on you are inaccurate, out of date, incomplete, and irrelevant or misleading, please contact us by email. We rely in part upon customers advising us when their personal information changes.  We will respond to any request within a reasonable time.  We will endeavour to promptly correct any information found to be inaccurate, incomplete or out of date.</p>
                      </div>
                      <div class="policy-list">
                        <h3 class="policy-title">Complaints about breach</h3>
                        <p>If you believe that we have breached the Australian Privacy Principles and wish to make a complaint about that breach, please contact us on the email address below.</p>
                      </div>

                      <div class="policy-list">
                        <h3 class="policy-title">Unsubscribe</h3>
                       <p>To unsubscribe from our e-mail database, or opt out of communications, please contact us at the details below.</p>
                      </div>
                      <div class="policy-list">
                        <h3 class="policy-title">Storage and Security</h3>
                     <p>We are committed to ensuring that the information you provide is secure.
                       For any questions or notice, please contact us at:
                       3A Foods</p>
                        <p>Email: <a href="" class="text-warning">info@3afoods.com.au</a></p>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TheFooter: () => import('@/components/TheFooter')
        },
        head() {
            return {
                title: "Privacy Policy"
            }
        }
    };
</script>

<style lang="scss" scoped>
    .policy-section {
        padding: 96px 0 95px;
        @media #{$xs-layout} {
            padding: 60px 0;
        }
    }
    .policy-list:not(:last-child) {
        margin-bottom: 40px;
        @media #{$xs-layout} {
            margin-bottom: 30px;
        }
    }
    .policy-title {
        font-weight: 500;
    }
</style>
