<template>
  <div>
    <div class="banner-area pb-70">
      <div class="container">
        <div class="row mtn-30">
          <div class="col-md-6 mt-30" v-for="(banner, index) in banners" :key="index">
            <BannerItem :banner="banner" />
          </div>
        </div>
      </div>
    </div>
    <div class="about-mission-area pb-70">
      <div class="container">
        <div class="row">
          <div class="col-md-6" v-for="(item, index) in items" :key="index">
            <div class="single-mission mb-30">
              <h3>{{ item.title }}</h3>
              <p style="text-align: justify">{{ item.desc }}</p>
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
      ],
      items: [],
    };
  },
  methods: {
    async loadMissionData() {
      try {
        const response = await this.$axios.$get("ui-sections/mission_vision");
        const attributes = response[0].attributes.reduce((acc, attr) => {
          acc[attr.key] = attr.value;
          return acc;
        }, {});
        this.items=[{
          id:1,
          title:'Our Mission',
          desc:attributes?.mission_content
        },
          {
            id:2,
            title:'Our Vision',
            desc:attributes?.vision_content
          }
        ]
      } catch (error) {
        console.error("Error loading mission data:", error);
      }
    },
  },
  mounted() {
    this.loadMissionData();
  },
};
</script>
