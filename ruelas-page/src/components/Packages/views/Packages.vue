<template>
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
          {{ $t("packagesMsg") }} {{ $t("consulteNuestros") }}
          <a>{{ $t("terminosCondiciones") }}</a>
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
        <p></p>
      </div>

      <div class="mt-5" id="contact">
        <FooterPage></FooterPage>
      </div>
    </div>
  </div>
</template>


<script>
import './Style.css'
import FooterPage from '@/components/Footer/FooterPage.vue';
import CardPackage from '../Card/CardPackage.vue';
export default {
  name: "HomeView",
  components: {
    FooterPage,
    CardPackage,
  },
  data: () => ({}),
  methods: {},
};
</script>