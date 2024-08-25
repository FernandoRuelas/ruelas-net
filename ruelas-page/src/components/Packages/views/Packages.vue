<template>
  <div id="packages">
    <div class="background-container d-flex flex-column">
      <div class="packages-text-container">
        <h2>{{ $t("packages") }}</h2>
      </div>

      <div
        class="p-2 d-flex justify-space-around flex-wrap section-packages"
        v-bind:v-for="item in packages"
      >
      <CardPackage
          v-for="(item, index) in packages"
          :key="index"
          :price="item.price"
          :title="item.title"
          :subtitle="item.subtitle"
          :points="item.points"
        ></CardPackage>
      </div>

      <div class="mt-5 px-10 packages-container-avisos">
        <p>
          {{ $t("packagesMsg") }} {{ $t("consulteNuestros") }}
          <a href="/assets/files/TérminosCondiciones.pdf" target="_blank">{{
            $t("terminosCondiciones")
          }}</a>
        </p>
        <p>
          {{ $t("packagesMsg2") }}
          <a href="/assets/files/AvisoDePrivacidad.pdf" target="_blank">{{
            $t("avisoPrivacidad")
          }}</a>
        </p>
        <p>
          {{ $t("consulteNuestras") }}
          <a href="/assets/files/Políticas.pdf" target="_blank">{{
            $t("politicas")
          }}</a>
        </p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import "./Style.css";
import CardPackage from "../Card/CardPackage.vue";
export default {
  name: "HomeView",
  components: {
    // FooterPage,
    CardPackage,
  },
  data: () => ({
    packages: [],
  }),
  created() {
    this.initialValues();
  },
  methods: {
    initialValues() {
      this.packages = [
        {
          price: 550,
          title: this.$t("package1Title"),
          subtitle: this.$t("benefits"),
          points: [this.$t("package1Point"), this.$t("package1Point2")],
        },
        {
          price: 550,
          title: this.$t("package2Title"),
          subtitle: this.$t("benefits"),
          points: [
            this.$t("package2Point"),
            this.$t("package2Point2"),
            this.$t("package2Point3"),
          ],
        },
        {
          price: 550,
          title: this.$t("package3Title"),
          subtitle: this.$t("benefits"),
          points: [
            this.$t("package3Point"),
            this.$t("package3Point2"),
            this.$t("package3Point3"),
          ],
        },
        {
          price: 550,
          title: this.$t("package3Title"),
          subtitle: this.$t("benefits"),
          points: [
            this.$t("package3Point"),
            this.$t("package3Point2"),
            this.$t("package3Point3"),
          ],
        },
      ];
    },
  },
};
</script>
