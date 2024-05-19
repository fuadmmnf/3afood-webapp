<template>
    <div class="about-mission-area pb-70">
        <div class="container">
            <div class="row">
                <div class="col-md-6" v-for="(item, index) in items" :key="index">
                    <div class="single-mission mb-30">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.desc }}</p>
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
                items: [
                    {
                        id: 1,
                        title: "Our vision",
                        desc: "Our mission is to create a great shopping environment where satisfaction is guaranteed. From our humble beginnings as a neighborhood grocer, we've grown to serve statewide, providing quality products to businesses across Western Australia"

                    },
                    {
                        id: 2,
                        title: "Our mission",
                        desc: "Our vision is to become the leading supplier of quality groceries and provisions across Western Australia, serving businesses of all sizes with a focus on customer satisfaction. From our humble beginnings as a local grocer, we strive to expand statewide while providing an exceptional shopping experience"
                    },
                ]
            }
        },
    };
</script>
