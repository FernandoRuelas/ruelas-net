<template>
  <div class="HomeView">
    <!------------------------------------------------>
    <!-----------------HOME SECTION------------------>
    <!------------------------------------------------>
    <NavBar></NavBar>
    <NavBarMovile v-if="$vuetify.breakpoint.xs"></NavBarMovile>
    <div id="home">
      <div class="background-container container-flayer">
        <div>
          <h2>{{ $t("title") }}</h2>
          <h4>{{ $t("subtitulo") }}</h4>
        </div>
        <img
          src="../../assets/imgs/imgPrincipal.png"
        />
      </div>
    </div>

    <!------------------------------------------------>
    <!-----------------ABOUT SECTION------------------>
    <!------------------------------------------------>
    <div id="about" class="about">
      <div class="container-left">
        <div>
          <h2>{{ $t("aboutTitulo") }}</h2>
          <h4>
            {{ $t("aboutSubtitulo") }}
          </h4>
        </div>

        <v-card elevation="0" max-width="500">
          <v-carousel
           cycle
          interval="3500"
            height="350"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item>
              <v-sheet height="100%" width="500">
                <div class="container-image img1">
                  <p>{{ $t('textCarrusel1') }}</p>
                  <p class="mb-5">{{ $t('textCarrusel1Desc') }}</p>
                </div>
              </v-sheet>
            </v-carousel-item>

            <v-carousel-item>
              <v-sheet height="100%" width="500">
                <div class="container-image img2">
                  <p>{{ $t('textCarrusel2') }}</p>
                  <p class="mb-5">{{ $t('textCarrusel2Desc') }}</p>
                  </div>
              </v-sheet>
            </v-carousel-item>

            <v-carousel-item>
              <v-sheet height="100%" width="500">
                <div class="container-image img3">
                  <p>{{ $t('textCarrusel3') }}</p>
                  <p class="mb-5">{{ $t('textCarrusel3Desc') }}</p> 
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </div>
      <div>
        <div>
          <h2>{{ $t("vision") }}</h2>
          <h4>
            {{ $t("visionText") }}
          </h4>
        </div>
        <div>
          <h2>{{ $t("mision") }}</h2>
          <h4>
            {{ $t("misionText") }}
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
          <h2>{{ $t("packages") }}</h2>
        </div>

        <div class="p-2 d-flex justify-space-around flex-wrap section-packages">
          <CardPackage></CardPackage>
          <CardPackage></CardPackage>
          <CardPackage></CardPackage>
          <CardPackage></CardPackage>
        </div>

        <div class="mt-5 px-10 packages-container-avisos">
          <p>
            {{ $t("packagesMsg") }} {{ $t("consulteNuestros") }} <a>{{ $t("terminosCondiciones") }}</a>
          </p>
          <p>
            {{ $t("packagesMsg2") }} <a>{{ $t("avisoPrivacidad") }}</a>
          </p>
          <p>
            {{ $t("packagesMsg3") }} <a>{{ $t("consulteAqui") }}</a>
          </p>
          <p>
            {{ $t("consulteNuestras") }} <a>{{ $t("politicas") }}</a>
          </p>
          <p>
         
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
