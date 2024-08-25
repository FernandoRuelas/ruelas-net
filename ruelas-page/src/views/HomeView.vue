<template>
  <div class="HomeView">
    <!------------------------------------------------>
    <!-----------------HOME SECTION------------------>
    <!------------------------------------------------>
    <NavBar></NavBar>
    <NavBarMovile v-if="$vuetify.breakpoint.xs"></NavBarMovile>
    <MyHome></MyHome>
    <MyAbout></MyAbout>
    <Packages></Packages>
    <div class="mt-5" id="contact">
        <FooterPage></FooterPage>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Home/NavBar/NavBar.vue";
import NavBarMovile from "@/components/Home/NavBar-movile/NavBar-movile.vue";
import MyHome from "@/components/Home/Home/MyHome.vue";
import MyAbout from "@/components/About/About/MyAbout.vue";
import Packages from "@/components/Packages/views/Packages.vue";
import FooterPage from "@/components/Footer/FooterPage.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    NavBarMovile,
    MyHome,
    MyAbout,
    Packages,
    FooterPage
  },
  data: () => ({}),
  methods: {},
};
</script>
