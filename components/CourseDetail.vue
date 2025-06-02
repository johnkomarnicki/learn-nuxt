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
    description:
      "Dive deeper into topics like server routes, middleware, data caching, and more.",
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
      "Apply your knowledge by creating two applications, including a full-stack app using Nuxt, Supabase, and Stripe.",
    image: "/nuxt-course-project-building.png",
  },
]);
</script>

<template>
  <section class="py-12">
    <h2 class="font-medium text-4xl mb-1 text-center">What's In The Course?</h2>
    <p
      class="text-lg text-center max-w-screen-tablet mx-auto text-wrap-balance"
    >
      Dive into modern web development with Nuxt and Supabase. Start by building
      a Recipe App MVP, mastering the fundamentals of Nuxt along the way. Then,
      explore advanced Nuxt concepts before transforming the app into a fully
      functional CRUD application powered by Supabase.
    </p>
    <div class="flex flex-col gap-20 py-16">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="flex flex-col items-center gap-10 md:flex-row md:gap-24"
      >
        <div
          class="relative flex basis-[45%] order-2"
          :class="
            index % 2 === 0
              ? 'md:order-1 md:justify-start'
              : 'md:order-2 md:justify-end'
          "
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
  </section>
</template>
