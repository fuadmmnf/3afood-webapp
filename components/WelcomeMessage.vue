<template>
    <div class="welcome-area">
        <div class="container">
            <div class="welcome-content text-center" v-if="aboutUs">
                <h5>Who Are We</h5>
              <h1>{{ aboutUs.title }}</h1>
              <p>{{ aboutUs.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                aboutUs:{},
            }
        },
      methods: {
        async loadAboutUs() {
          try {
            const response = await this.$axios.$get("ui-sections/about_us");
            const attributes = response[0].attributes.reduce((acc, attr) => {
              acc[attr.key] = attr.value;
              return acc;
            }, {});
            this.aboutUs = {
              title: response[0]?.title || "Default Title",
              desc: attributes['content']|| "Default Description",
            };
          } catch (error) {
            console.error("Error loading about us data:", error);
          }
        },
      },
      mounted() {
        this.loadAboutUs();
      },
    };
</script>
