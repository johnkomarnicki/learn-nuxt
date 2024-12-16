<script setup>
import lessons from "../assets/lessons.json";
const { sectionOneLessons, sectionTwoLessons, sectionThreeLessons } = lessons;

const modules = [
  {
    label: "Module 1 - Nuxt Basics (Recipe Application MVP)",
    lessons: sectionOneLessons,
    lectures: sectionOneLessons.length,
    duration: "1 Hour 17 Min",
  },
  {
    label: "Module 2 - Nuxt UI (New)",

    lessons: sectionTwoLessons,
    lectures: sectionTwoLessons.length,
    duration: "33 Min",
  },
  {
    label: "Module 3 - Server Routes",
    badge: "New",
    lessons: sectionThreeLessons,
    lectures: sectionThreeLessons.length,
    duration: "40 Min",
    defaultOpen: true,
  },
];

const previewModal = ref(false);
const selectedLesson = ref();
function setPreviewModal(lesson) {
  selectedLesson.value = lesson;
  previewModal.value = true;
}
</script>

<template>
  <UModal
    v-model="previewModal"
    :ui="{
      base: 'font-Exo',
      width: 'sm:max-w-[1000px]',
    }"
  >
    <div class="p-10">
      <div class="flex items-center mb-8">
        <h1 class="text-2xl">{{ selectedLesson.title }}</h1>
        <UIcon
          @click="previewModal = false"
          name="heroicons:x-circle-16-solid"
          class="h-8 w-8 ml-auto cursor-pointer hover:opacity-75 duration-300"
        />
      </div>
      <div class="flex flex-col p-6 items-center relative w-full pb-[56.25%] h-0">
        <iframe
          class="absolute top-0 left-0 w-full h-full shadow rounded-lg"
          :src="`${selectedLesson.preview}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  </UModal>
  <UAccordion
    :items="modules"
    :ui="{
      item: {
        padding: 'p-0',
      },
    }"
  >
    <template #default="{ item, index, open }">
      <UButton
        size="xl"
        :ui="{
          size: {
            xl: 'text-xl',
          },
          padding: {
            xl: 'py-5 px-5',
          },
        }"
        color="gray"
        class="rounded-none"
      >
        <div class="flex items-center gap-2">
          <span>{{ item.label }}</span>
          <UBadge color="yellow" v-if="item.badge" :label="item.badge" />
        </div>

        <template #trailing>
          <div class="flex gap-4 ml-auto items-center">
            <div class="text-sm ml-auto">{{ item.lectures }} lessons • {{ item.duration }}</div>
            <UIcon
              name="i-heroicons-chevron-right-20-solid"
              class="w-7 h-7 ms-auto transform transition-transform duration-200"
              :class="[open && 'rotate-90']"
            />
          </div>
        </template>
      </UButton>
    </template>
    <template #item="{ item }">
      <div class="px-5 py-3.5 bg-gray-700/50 flex gap-3 flex-col">
        <div class="flex" v-for="lesson in item.lessons">
          <span class="text-white flex items-center gap-3 text-lg">
            <UIcon name="heroicons:video-camera"></UIcon>
            <span>{{ lesson.title }}</span>
          </span>
          <div v-if="lesson.preview" class="ml-auto">
            <UButton @click="setPreviewModal(lesson)" size="xs" label="Preview" />
          </div>
        </div>
      </div>
    </template>
  </UAccordion>
</template>

<style scoped></style>
