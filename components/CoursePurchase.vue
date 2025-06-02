<script setup lang="ts">
import lessons from "../assets/lessons.json";
const { totalLessons } = getLessonLength(lessons);
</script>

<template>
  <div id="purchase" class="container py-16">
    <div class="flex flex-col items-center">
      <h1 class="text-5xl mb-4 font-bold">$69.99</h1>
      <h2 class="text-4xl mb-2 text-primary font-semibold text-center">
        Join Early Preview
      </h2>
      <p class="text-center text-wrap-balance">
        During early preview, get at least
        <span class="font-semibold">30%</span> off the final price.
      </p>
      <hr
        class="my-5 w-20 border-primary border-2 items-center justify-center"
      />
      <div class="mb-8">
        <p class="text-center mb-4">The early preview version includes:</p>
        <ul class="list-disc list-inside">
          <li>{{ totalLessons }} lessons</li>
          <li>4.5+ hours of content</li>
          <li>Future course content</li>
          <li>Private Discord Server</li>
        </ul>
      </div>
      <UButton
        to="https://john-komarnicki.teachable.com/purchase?product_id=6139354"
        target="_blank"
        size="xl"
        label="Purchase now"
      />
      <p class="mt-12">
        Already purchased?
        <ULink
          class="font-bold"
          target="_blank"
          to="https://sso.teachable.com/secure/1251673/identity/login"
        >
          Login here
        </ULink>
      </p>
    </div>
  </div>
</template>
