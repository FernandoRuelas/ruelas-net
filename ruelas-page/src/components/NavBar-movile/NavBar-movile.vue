<template>
  <v-bottom-navigation background-color="#0065ff" absolute>
    <v-btn icon @click="scrollTo('home')">
      <i class="fa fa-home-alt white--text"></i>
    </v-btn>

    <v-btn icon @click="scrollTo('about')">
      <i class="fas fa-user white--text"></i>
    </v-btn>

    <v-btn icon @click="scrollTo('packages')">
      <i class="fa fa-wifi white--text"></i>
    </v-btn>

    <v-btn icon @click="scrollTo('contact')">
      <i class="fa-solid fa-phone white--text"></i>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "navBar-movile",
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      const container = document.querySelector(".HomeView");

      if (element && container) {
        const elementPosition = element.offsetTop;

        const scrollPosition = elementPosition - 47; // 47 is the heigth of header

        container.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
    },
  },
};
</script>
