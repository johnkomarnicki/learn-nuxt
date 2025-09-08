<script setup lang="ts">
const previewModal = ref(false);
</script>

<template>
  <LazyUModal
    v-model="previewModal"
    :ui="{
      base: 'font-Exo',
      width: 'sm:max-w-[1000px]',
    }"
  >
    <div class="p-10">
      <div
        class="flex flex-col p-6 items-center relative w-full pb-[56.25%] h-0"
      >
        <iframe
          class="absolute top-0 left-0 w-full h-full shadow rounded-lg"
          src="https://www.youtube.com/embed/RAJZOqr3JZU?si=xCQMa9-L-BUw9_WI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </LazyUModal>
  <div class="hero py-24">
    <div class="container sm:max-w-screen-sm md:max-w-screen-tablet">
      <div class="flex flex-col items-center justify-center">
        <img class="w-[75px] mb-8" src="/nuxt-icon-white.png" alt="" />
        <UBadge
          label="Early Access"
          variant="outline"
          size="lg"
          class="mb-8 shadow-md"
        />
        <h1
          class="text-wrap-balance text-center text-4xl sm:text-5xl md:text-6xl md:leading-[70px] mb-4 font-bold"
        >
          Build Modern Applications With Nuxt!
        </h1>
        <p
          class="text-wrap-balance text-sm sm:text-base md:text-lg text-center mb-6"
        >
          A premium
          <span class="text-primary font-bold">project-based</span>
          course that will teach you how to build applications using
          <ULink
            href="https://nuxt.com/"
            class="text-primary font-bold underline"
          >
            Nuxt
          </ULink>
          &
          <ULink
            href="https://supabase.com/"
            class="text-primary font-bold underline"
          >
            Supabase </ULink
          >.
        </p>
        <div class="flex gap-2">
          <UButton
            @click="previewModal = !previewModal"
            target="_blank"
            size="xl"
            variant="outline"
            label="Preview"
          />
          <UButton
            to="https://john-komarnicki.teachable.com/purchase?product_id=6443243"
            target="_blank"
            size="xl"
            label="Purchase now"
          />
        </div>
        <div
          class="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12"
        >
          <img
            class="w-[75px] rounded-full shadow-md"
            src="/author.png"
            alt=""
          />
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
              <a
                href="https://www.webdevdaily.io/"
                target="_blank"
                class="text-primary underline"
              >
                WebDevDaily
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
