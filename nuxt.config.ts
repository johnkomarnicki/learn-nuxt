// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1, maximum-scale=1",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          rel: "preload",
          as: "style",
          onload: "this.onload=null;this.rel='stylesheet'",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxtjs/supabase",
    "@nuxt/image",
    "@nuxtjs/plausible",
    "@nuxtjs/seo",
  ],

  colorMode: {
    preference: "dark",
  },

  plausible: {
    domain: "learnnuxt.dev",
    ignoredHostnames: ["localhost"],
  },

  supabase: {
    redirect: false,
  },

  seo: {
    enabled: false,
  },
});
