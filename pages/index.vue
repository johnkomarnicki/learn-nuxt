<script setup>
useSeoMeta({
  title: "Build Modern Applications With Nuxt 3",
  description:
    "A premium project-based course that will teach you how to build applications using Nuxt.",
  ogTitle: "Build Modern Applications With Nuxt 3",
  ogDescription:
    "A premium project-based course that will teach you how to build applications using Nuxt.",
  ogImage: "https://www.learnnuxt.dev/nuxt-course-thumbnail.png",
  ogUrl: "https://www.learnnuxt.dev/",
  twitterTitle: "Build Modern Applications With Nuxt 3",
  twitterDescription:
    "A premium project-based course that will teach you how to build applications using Nuxt.",
  twitterImage: "https://www.learnnuxt.dev/nuxt-course-thumbnail.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <CourseHero />
  <div class="py-16 bg-gradient-to-b from-gray-900/50 to-gray-700/50">
    <div class="container max-w-screen-md divide-y-2 divide-white/35">
      <CourseDetail />
      <CourseCurriculum />
      <CoursePurchase />
    </div>
  </div>
</template>

<style scoped></style>
