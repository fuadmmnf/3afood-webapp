<template>
  <div class="blog-wrap-2 mb-30">
    <div class="blog-img-2">
      <n-link :to="`/blog/${(category.category_name)}`">
        <img :src="path+category.img" :alt="category.title">
      </n-link>
    </div>
    <div class="blog-content-2">
      <p class="text-center">
        {{ category.category_name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"],
  data(){
    return {
      path : process.env.dev? process.env.WEB_DEV_URL: process.env.WEB_BUILD_URL
    }
  },
  methods: {

  },
};
</script>