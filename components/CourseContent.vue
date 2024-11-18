<script setup>
const sectionOneLessons = [
  { lesson: 0, title: "Course Introduction" },
  { lesson: 1, title: "What is Nuxt?" },
  { lesson: 2, title: "Creating A Nuxt App" },
  { lesson: 3, title: "Useful VSCode Extensions" },
  { lesson: 4, title: "Nuxt File Directory Structure (Version 4)" },
  { lesson: 5, title: "Installing Nuxt Modules" },
  { lesson: 6, title: "Configuring Nuxt Modules" },
  { lesson: 7, title: "Adding Pages (File Based Routing)" },
  { lesson: 8, title: "Layouts" },
  { lesson: 9, title: "Components With Nuxt" },
  { lesson: 10, title: "Changing Pages (Nuxt-Link)" },
  { lesson: 11, title: "Image Optimization (Nuxt Image Module)" },
  { lesson: 12, title: "Responsive Images (Nuxt Image Module)" },
  { lesson: 13, title: "Introduction to Data Fetching" },
  { lesson: 14, title: "Fetching Data with useFetch() & useAsyncData()" },
  { lesson: 15, title: "Route Params" },
  { lesson: 16, title: "Handling Errors & Custom Error Page" },
  { lesson: 17, title: "Handling Simple API Errors" },
  { lesson: 18, title: "Setting Metadata With useSeoMeta()" },
  { lesson: 19, title: "Project Cleanup" },
  //   { lesson: 20, title: "Deploy To Vercel" },
];
const sectionTwoLessons = [
  { lesson: 0, title: "What is Nuxt UI?" },
  { lesson: 1, title: "Install & Setup" },
  { lesson: 2, title: "Using Nuxt UI Components" },
  { lesson: 3, title: "Color Theming" },
  { lesson: 4, title: "Modifying Components" },
  { lesson: 5, title: "Dark Mode Configuration" },
  { lesson: 6, title: "Using Icons" },
  { lesson: 7, title: "Configure Recipe Application With Nuxt UI" },
];
</script>

<template>
  <div class="flex flex-col border px-6 py-4 rounded-md max-h-[400px]">
    <h1 class="text-xl mb-2">
      Module 1 - Nuxt Basics <span class="text-lg">(Recipe Application)</span>
    </h1>
    <p class="mb-4 text-sm">Learn the basics of Nuxt by building a recipe application.</p>
    <div class="mt-auto flex flex-col gap-2 overflow-scroll">
      <div
        v-for="lesson in sectionOneLessons"
        class="flex bg-gray-700/50 py-3 px-4 gap-2 rounded-md shadow"
      >
        <span>
          Lesson {{ lesson.lesson + 1 }}: <span class="font-semibold">{{ lesson.title }}</span>
        </span>
      </div>
    </div>
  </div>
  <div class="flex flex-col border px-6 py-4 rounded-md max-h-[400px]">
    <h1 class="text-xl mb-2">Module 2 - Nuxt UI</h1>
    <p class="mb-4 text-sm">Explore Nuxt UI, a modern UI library for building web applications.</p>
    <div class="flex flex-col gap-2 overflow-scroll">
      <div
        v-for="lesson in sectionTwoLessons"
        class="flex bg-gray-700/50 py-3 px-4 gap-2 rounded-md shadow"
      >
        <span>
          Lesson {{ lesson.lesson + 1 }}: <span class="font-semibold">{{ lesson.title }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
