<template>
  <div class="HomeView">
    <!------------------------------------------------>
    <!-----------------HOME SECTION------------------>
    <!------------------------------------------------>
    <NavBar></NavBar>
    <NavBarMovile v-if="$vuetify.breakpoint.xs"></NavBarMovile>
    <div id="home">
      <div class="background-container">
        <div class="text-container">
          <h2>{{ $t('title') }}</h2>
          <h4>Texto de ejemplo para esta sección, siempre resaltará</h4>
        </div>
        <img
          class="img"
          src="../../assets/logo.png"
          width="250px"
          height="250px"
        />
      </div>
    </div>

    <!------------------------------------------------>
    <!-----------------ABOUT SECTION------------------>
    <!------------------------------------------------>
    <div id="about" class="about">
      <div class="container-left">
        <div>
          <h2>Nulla incididunt excepteur consequat.</h2>
          <h4>
            Nostrud adipisicing excepteur adipisicing sit amet labore ullamco
            quis ipsum.
          </h4>
        </div>

        <v-card elevation="0" max-width="500">
          <v-carousel
            cycl
            height="350"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item>
              <v-sheet height="100%" width="500">
                <div class="container-image img1">
                  <h3>Lorem Ipsum</h3>
                </div>
              </v-sheet>
            </v-carousel-item>

            <v-carousel-item>
              <v-sheet height="100%" width="500">
                <div class="container-image img2">
                  <h3>Lorem Ipsum</h3>
                  <h3>Is simply dummy text of print</h3>
                </div>
              </v-sheet>
            </v-carousel-item>

            <v-carousel-item>
              <v-sheet height="100%" width="500">
                <div class="container-image img3">
                  <h3>Lorem Ipsum</h3>
                  <h3>Is simply dummy text of print</h3>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </div>
      <div>
        <div>
          <h2>Nulla incididunt excepteur consequat enim.</h2>
          <h4>
            Nostrud adipisicing excepteur adipisicing sit amet labore ullamco
            quis ipsum. Ipsum elit ipsum laboris occaecat deserunt in laboris.
            Do laborum reprehenderit non nulla esse sit proident ipsum quis
            officia id laboris reprehenderit ipsum.
          </h4>
        </div>
        <div>
          <h2>Nulla incididunt excepteur consequat enim.</h2>
          <h4>
            Nostrud adipisicing excepteur adipisicing sit amet labore ullamco
            quis ipsum. Ipsum elit ipsum laboris occaecat deserunt in laboris.
            Do laborum reprehenderit non nulla esse sit proident ipsum quis
            officia id laboris reprehenderit ipsum.
          </h4>
        </div>
      </div>
    </div>

    <!------------------------------------------------>
    <!-----------------PACKAGES SECTION--------------->
    <!------------------------------------------------>
    <div id="packages">
      <div class="background-container d-flex flex-column">
        <div class="packages-text-container">
          <h2>Packages</h2>
        </div>

        <div class="p-2 d-flex justify-space-around flex-wrap section-packages">
          <CardPackage></CardPackage>
          <CardPackage></CardPackage>
          <CardPackage></CardPackage>
          <CardPackage></CardPackage>
        </div>

        <div class="mt-5 px-10 packages-container-avisos">
          <p>
            Aute cupidatat <a href="">Lorem</a>Lorem occaecat ad aute culpa
            <a href="">qui</a> magna minim. Magna aliqua commodo ad laboris
            velit esse laborum pariatur quis duis consectetur. Eiusmod cillum
            nulla magna Lorem ipsum culpa cupidatat elit. Veniam ut
            reprehenderit duis sunt deserunt aliquip non irure ut voluptate
            Lorem nulla exercitation veniam. Ipsum tempor ipsum laborum minim
            Lorem et cillum.
          </p>
          <p>
            Aute cupidatat <a href="">Lorem</a>Lorem occaecat ad aute culpa
            <a href="">qui</a> magna minim. Magna aliqua commodo ad laboris
            velit esse laborum pariatur quis duis consectetur. Eiusmod cillum
            nulla magna Lorem ipsum culpa cupidatat elit. Veniam ut
            reprehenderit duis sunt deserunt aliquip non irure ut voluptate
            Lorem nulla exercitation veniam. Ipsum tempor ipsum laborum minim
            Lorem et cillum.
          </p>
        </div>

        <div class="mt-5" id="contact">

          <FooterPage></FooterPage>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar/NavBar.vue";
import CardPackage from "@/components/CARD/CardPackage.vue";
import FooterPage from "@/components/Footer/FooterPage.vue";
import NavBarMovile from "@/components/NavBar-movile/NavBar-movile.vue";
import "./Style.css";

export default {
  name: "HomeView",
  components: {
    NavBar,
    NavBarMovile,
    CardPackage,
    FooterPage,
  },
  data: () => ({
    images: [
      "../../assets/logo.png",
      "../../assets/logo.svg",
      "../../assets/Vector3.png",
    ],
  }),
  methods: {},
};
</script>
