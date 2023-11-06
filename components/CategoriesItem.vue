<template>
  <div class="blog-wrap-2 mb-30">
    <div class="blog-img-2">
      <n-link :to="`/blog/${slugify(blog.title)}`">
        <img :src="blog.imgSrc" :alt="blog.title">
      </n-link>
    </div>
    <div class="blog-content-2">
      <p>
        <n-link :to="`/blog/${slugify(blog.title)}`">{{ blog.title.slice(0,10)}}</n-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blog"],

  methods: {
    slugify(text) {
      return text
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "-") // Replace spaces with -
          .replace(/[^\w-]+/g, "") // Remove all non-word chars
          .replace(/--+/g, "-") // Replace multiple - with single -
          .replace(/^-+/, "") // Trim - from start of text
          .replace(/-+$/, ""); // Trim - from end of text
    }
  },
};
</script>