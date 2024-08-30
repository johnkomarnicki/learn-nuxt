<script setup>
const features = ref([
  {
    title: "Basics of Nuxt",
    description:
      "Start by building a simple recipe application to get hands-on experience with Nuxt core concepts.",
    image: "/nuxt-course-basics.png",
  },
  {
    title: "Advanced Nuxt Concepts",
    description: "Dive deeper into topics like server routes, middleware, data caching, and more.",
    image: "/nuxt-course-advanced-concepts.png",
  },
  {
    title: "Third-Party Tools",
    description:
      "Explore modules like Supabase, Stripe, Vercel, and others to enhance your applications.",
    image: "/nuxt-course-third-party.png",
  },
  // {
  //   title: "Coding Exercises",
  //   description: "Practice your skills with hands-on coding exercises throughout the course.",
  //   image: "/nuxt-course-basics.png",
  // },
  {
    title: "Project Building",
    description:
      "Apply your knowledge by creating several applications, including a full-stack app using Nuxt, Supabase, and Stripe.",
    image: "/nuxt-course-project-building.png",
  },
]);

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
  <div class="hero py-24">
    <div class="container sm:max-w-screen-sm md:max-w-screen-tablet">
      <div class="flex flex-col items-center justify-center">
        <img class="w-[75px] mb-8" src="/nuxt-icon-white.png" alt="" />
        <UBadge label="Early Access" variant="outline" size="lg" class="mb-8 shadow-md" />
        <h1
          class="text-wrap-balance text-center text-4xl sm:text-5xl md:text-6xl md:leading-[70px] mb-4 font-bold"
        >
          Build Modern Applications With Nuxt!
        </h1>
        <p class="text-wrap-balance text-sm sm:text-base md:text-lg text-center mb-6">
          A premium
          <span class="text-primary font-extrabold">project-based</span> course that will teach you
          how to build applications using Nuxt.
        </p>
        <UButton
          to="https://john-komarnicki.teachable.com/purchase?product_id=5719002"
          target="_blank"
          size="xl"
          label="Purchase now"
        />

        <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <img class="w-[75px] rounded-full shadow-md" src="/author.png" alt="" />
          <div class="flex flex-col items-center sm:items-start">
            <p class="font-bold text-lg sm:text-2xl">by John Komarnicki</p>
            <p class="text-center text-sm sm:text-base">
              <a
                href="https://www.youtube.com/channel/UCr0D7PVNOHqB3Td7lVl_LKw"
                target="_blank"
                class="text-primary underline"
              >
                YouTube Content Creator</a
              >
              & Founder of
              <a href="https://www.webdevdaily.io/" target="_blank" class="text-primary underline">
                WebDevDaily
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Course Details -->
  <div class="py-16 bg-gradient-to-b from-gray-900/50 to-gray-700/50">
    <div class="container max-w-screen-md">
      <h2 class="font-medium text-4xl mb-1 text-center">What's In The Course?</h2>
      <p class="text-lg text-center max-w-screen-tablet mx-auto text-wrap-balance">
        In this course, we'll dive into building modern applications with Nuxt. The aim is to give
        you practical insights and a realistic approach to developing production-ready applications
        using Nuxt.
      </p>
      <div class="flex flex-col gap-20 py-16">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="flex flex-col items-center gap-10 md:flex-row md:gap-24"
        >
          <div
            class="relative flex basis-[45%] order-2"
            :class="index % 2 === 0 ? 'md:order-1 md:justify-start' : 'md:order-2 md:justify-end'"
          >
            <NuxtImg
              v-if="index !== 1"
              sizes="sm:100vw md:50vw"
              format="webp"
              class="rounded-md"
              :src="feature.image"
            />
            <AdvancedFeatures v-else />
          </div>
          <div
            class="flex flex-1 flex-col items-center text-center text-font-color md:items-start md:text-start"
            :class="index % 2 === 0 ? 'md:order-2' : 'md:order-1'"
          >
            <div class="flex mb-2 gap-2 items-center flex-wrap">
              <h3 class="text-wrap-balance text-3xl font-medium lg:text-4xl">
                {{ feature.title }}
              </h3>
              <UBadge size="md" v-if="index === 3" label="Coming Soon" />
            </div>
            <p class="text-wrap-balance text-lg">
              {{ feature.description }}
            </p>
            <UButton
              target="_blank"
              to="https://nuxt-course-beta.vercel.app/"
              icon="heroicons:globe-alt-solid"
              class="mt-4"
              v-if="index === 0"
              label="Preview Demo"
              size="lg"
            />
          </div>
        </div>
      </div>
      <hr class="my-16 border-white/35" />
      <div id="purchase" class="container py-16">
        <div class="flex flex-col items-center">
          <h1 class="text-5xl mb-4 font-bold">$39.99</h1>
          <h2 class="text-4xl mb-2 text-primary font-semibold text-center">Join Early Preview</h2>
          <p class="text-center text-wrap-balance">
            During early preview, get at least 30% off the final price.
          </p>
          <hr class="my-5 w-20 border-primary border-2 items-center justify-center" />
          <div class="mb-8">
            <p>The early preview version includes:</p>
            <ul class="list-disc list-inside">
              <li>20 lessons (1 project)</li>
              <li>2 hours of content</li>
              <li>All future course content</li>
              <li>Private Discord Server</li>
            </ul>
          </div>
          <UButton
            to="https://john-komarnicki.teachable.com/purchase?product_id=5719002"
            target="_blank"
            size="xl"
            label="Purchase now"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
