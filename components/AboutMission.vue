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
