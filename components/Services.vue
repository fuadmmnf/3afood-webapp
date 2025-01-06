<template>
  <div class="container pt-70">
    <SectionTitleWithSubTitle classes="section-title-2 mb-60" title="Our Services" />
    <div class="row">
      <div
          v-for="(service, index) in serviceData"
          :key="index"
          class="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center p-3"
      >
        <img :src="`${path}${service.image}`" :alt="service.title" />
        <div class="service-info">
          <h2>{{ service.title }}</h2>
          <p>{{ service.content }}</p>
          <div class="service-btn btn-hover">
            <n-link :to="service.link" class="default-btn">Learn More</n-link>
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
      serviceData: [],
      path : process.env.dev? process.env.WEB_DEV_URL: process.env.WEB_BUILD_URL
    };
  },
  methods: {
    async loadServiceData() {
      try {
        const response = await this.$axios.$get("ui-sections/service");
        this.serviceData = response.map((service) => {
          const attributes = service.attributes.reduce((acc, attr) => {
            acc[attr.key] = attr.value;
            return acc;
          }, {});
          return {
            title: service.title,
            content: attributes.content || "",
            link: attributes.link || "#",
            image: attributes.image || "",
          };
        });
      } catch (error) {
        console.error("Error loading service data:", error);
      }
    }
  },
  mounted() {
    this.loadServiceData()
  },
};
</script>

<style scoped>
.service-info{
  padding: 10px;
  text-align: justify;
}
.service-info h2{
  font-size: 25px;
}
img{
  width: 80px;
}
</style>