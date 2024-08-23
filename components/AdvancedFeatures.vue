<script setup lang="ts">
const features = [
  //   {
  //     title: "Data Fetching",
  //     description:
  //       "Composables that run on the server to fetch data for your components and enable you to render content in different ways.",
  //   },
  {
    title: "Server Routes",
    description:
      "Create API endpoints and server routes to securely connect with third party services and consume from your frontend.",
    icon: "i-heroicons-server-solid",
  },
  {
    title: "Middleware",
    description:
      "Run custom code such as authentication, localization or A/B testing before rendering a page or a group of pages.",
    icon: "i-wpf-security-checked",
  },
  //   {
  //     title: "Error Handling",
  //     description:
  //       "Built-in error handling and logging to help you debug your application and provide a better user experience.",
  //   },
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <div
      class="flex flex-col p-6 bg-gradient-to-br from-gray-700/50 to-gray-900/50 gap-4 rounded-lg shadow-md border border-transparent hover:border-primary duration-200"
      v-for="feature in features"
      :key="feature.title"
    >
      <UIcon :name="feature.icon" class="h-8 w-8" />
      <p>{{ feature.title }}</p>
      <p>{{ feature.description }}</p>
    </div>
  </div>
</template>
