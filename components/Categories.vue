<template>
  <div class="blog-without-sidebar">
    <div class="blog-area">
      <div class="container">
        <SectionTitleWithSubTitle
          classes="section-title-2 mb-60"
          :title="'Top Categories'"
        />
        <div class="row">
          <div class="col-12">
            <div class="ml-20">
              <div class="row">
                <div
                  class="col-lg-2 col-md-6 col-12"
                  v-for="(category, index) in getItems"
                  :key="index"
                >
                  <CategoriesItem :category="category" />
                </div>
              </div>
            </div>

            <div v-if="getPaginateCount > 1">
              <pagination
                class="pro-pagination-style shop-pagination mt-30"
                v-model="currentPage"
                :per-page="perPage"
                :records="categoryData.length"
                @paginate="paginateClickCallback"
                :page-count="getPaginateCount"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    BlogItemStyleTwo: () => import("@/components/BlogItemStyleTwo"),
  },
  props: ["title"],
  data() {
    return {
      currentPage: 1,
      perPage: 6,
      categoryData: [],
      path : process.env.dev? process.env.WEB_DEV_URL: process.env.WEB_BUILD_URL

    };
  },
  computed: {
    getItems() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.categoryData.slice(start, end);
    },
    getPaginateCount() {
      return Math.ceil(this.categoryData.length / this.perPage);
    },
  },
  methods: {
    async loadTopCategories() {
      const response = await this.$axios.$get("top-categories");
      this.categoryData=response.data
    },
    paginateClickCallback(pageNum) {
      this.currentPage = Number(pageNum);
    },
  },
  mounted() {
    this.loadTopCategories()
  },
};
</script>