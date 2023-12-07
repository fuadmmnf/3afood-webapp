<template>
  <div class="blog-wrap-2 mb-30">
    <div class="blog-img-2">
      <n-link :to="`/blog/${(blog.title)}`">
        <img :src="blog.imgSrc" :alt="blog.title">
      </n-link>
    </div>
    <div class="blog-content-2">
      <p class="text-center">
        {{ blog.title}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blog"],

  methods: {

  },
};
</script>