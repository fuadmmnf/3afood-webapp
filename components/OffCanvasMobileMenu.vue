<template>
    <div class="offcanvas-mobile-menu-wrapper">
        <div class="mobile-menu-overlay" @click="$emit('toggleAsideMenu')"></div>
        <div class="mobile-menu-inner">
            <button class="close-btn" @click="$emit('toggleAsideMenu')">
                <i class="pe-7s-close"></i>
            </button>
            <div class="mobile-menu-inner-wrapper">
                <div class="offcanvas-mobile-search">
            </div>
            <div class="offcanvas-body-inner">
                <div class="menu-navigation">
                    <ResponsiveMobileMenu />
                </div>
                <div class="offcanvas-tools">

                </div>
                <div class="offcanvas-widget-area">
                    <ul>
                        <li>
                          <i class="pe-7s-phone"></i> <span>08 9456 2685</span>
                        </li>
                        <li>
                          <i class="pe-7s-mail"></i> <span>info@3afoods.com.au</span>
                        </li>
                      <li>
                        <i class="pe-7s-map-marker"></i>
                        <span>3/39 Tulloch Way Canning Vale WA 6155 </span>
                      </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ResponsiveMobileMenu: () => import('@/components/ResponsiveMobileMenu'),
        },
    };
</script>