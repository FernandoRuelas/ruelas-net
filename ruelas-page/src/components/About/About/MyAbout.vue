<template>
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
                  <p>{{ $t("textCarrusel1") }}</p>
                  <p class="mb-5">{{ $t("textCarrusel1Desc") }}</p>
                </div>
              </v-sheet>
            </v-carousel-item>

            <v-carousel-item>
              <v-sheet height="100%" width="500">
                <div class="container-image img2">
                  <p>{{ $t("textCarrusel2") }}</p>
                  <p class="mb-5">{{ $t("textCarrusel2Desc") }}</p>
                </div>
              </v-sheet>
            </v-carousel-item>

            <v-carousel-item>
              <v-sheet height="100%" width="500">
                <div class="container-image img3">
                  <p>{{ $t("textCarrusel3") }}</p>
                  <p class="mb-5">{{ $t("textCarrusel3Desc") }}</p>
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


</template>

<script>  
import './Style.css'

export default {
  name: "MyAbout",
  components: {
  },
  data: () => ({}),
  methods: {},
};
</script>